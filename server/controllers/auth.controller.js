// import userModel from "../models/user.model.js";
// import crypto from "crypto";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import config from "../config/config.js";
// import sessionModel from "../models/session.model.js";
// import { sendEmail } from "../services/email.service.js";
// import { generateOtp, getOtpHtml } from "../utils/utils.js";
// import otpModel from "../models/otp.model.js";


// export async function register(req, res) {

//     const { username, email, password } = req.body;

//     const isAlreadyRegistered = await userModel.findOne({
//         $or: [
//             { username },
//             { email }
//         ]
//     })

//     if (isAlreadyRegistered) {
//         res.status(409).json({
//             message: "Username or email already exists"
//         })
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await userModel.create({
//         username,
//         email,
//         password: hashedPassword
//     })

//     const otp = generateOtp();
//     const html = getOtpHtml(otp);

//     const otpHash = await bcrypt.hash(otp, 10);
//     await otpModel.create({
//         email,
//         user: user._id,
//         otpHash
//     })

//     await sendEmail(email, "OTP Verification", `Your OTP code is ${otp}`, html)

//     res.status(201).json({
//         message: "User registered successfully, ",
//         user: {
//             username: user.username,
//             email: user.email,
//             verified: user.verified
//         },
//     })
// }


// export async function login(req, res) {
//     const { email, password } = req.body;

//     const user = await userModel.findOne({ email })

//     if (!user) {
//         return res.status(401).json({
//             message: "Invalid email or password"
//         })
//     }

//     if (!user.verified) {
//         return res.status(401).json({
//             message: "Email not verified"
//         })
//     }

//     // const hashedPassword = await bcrypt.hash(password, 10);

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//         return res.status(401).json({
//             message: "Invalid email or password"
//         })
//     }

//     const refreshToken = jwt.sign({
//             id: user._id,
//         }, config.JWT_SECRET,
//         {
//             expiresIn: "7d",
//         },
//     );

//     const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

//     const session = await sessionModel.create({
//         user: user._id,
//         refreshTokenHash,
//         ip: req.ip,
//         userAgent: req.headers[ "user-agent" ]
//     })

//     const accessToken = jwt.sign({
//             id: user._id,
//             sessionId: session._id
//         }, config.JWT_SECRET,
//         {
//             expiresIn: "15m"
//         }
//     )

//     res.cookie("refreshToken", refreshToken, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "strict",
//         maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
//     })

//     res.status(200).json({
//         message: "Logged in successfully",
//         user: {
//             username: user.username,
//             email: user.email,
//         },
//         accessToken,
//     })
// }


// export async function getMe(req, res) {

//     const token = req.headers.authorization?.split(" ")[ 1 ];

//     if (!token) {
//         return res.status(401).json({
//             message: "token not found"
//         })
//     }

//     const decode = jwt.verify(token, config.JWT_SECRET)

//     const user = await userModel.findById(decode.id)

//     res.status(200).json({
//         message: "user fetched successfully",
//         user: {
//             username: user.username,
//             email: user.email,
//         }
//     })

// }


// export async function refreshToken(req, res){
//     const refreshToken = req.cookies.refreshToken;

//     if(!refreshToken){
//         return res.status(401).json({
//             message: "Refresh token not found"
//         })
//     }

//     const decode = jwt.verify(refreshToken, config.JWT_SECRET);
//     const refreshTokenHash = crypto.createHash(sha256).update(refreshToken).digest(hex);

//     const session = await sessionModel.findOne({
//         refreshTokenHash,
//         revoked: false
//     })

//     if(!session){
//         return res.status(401).json({
//             message: "Invalid refresh token"
//         })
//     }

//     const accessToken = jwt.sign({
//             id : decode.id,
//         }, config.JWT_SECRET,
//         {
//             expiresIn: "15m"
//         }
//     )

//     const newRefreshToken = jwt.sign({
//             id: decode.id,
//         }, config.JWT_SECRET, 
//         {
//             expiresIn: "7d"
//         }
//     )
//     const newRefreshTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex");

//     session.refreshTokenHash = newRefreshTokenHash;
//     await session.save();

//     res.cookie("refreshToken", newRefreshToken,{
//         httpOnly: "tre",
//         secure: "true",
//         sameSite: "strict",
//         maxeAge: 7 * 24 * 60 * 60 * 1000 // 7 days
//     })

//     res.status(200).json({
//         message: "Access token refreshed successfully",
//         accessToken
//     })
// }
    

// export async function logout(req, res) {

//     const refreshToken = req.cookies.refreshToken;

//     if (!refreshToken) {
//         return res.status(400).json({
//             message: "Refresh token not found"
//         })
//     }

//     const decode = jwt.verify(refreshToken, config.JWT_SECRET);
//     const refreshTokenHash = crypto.createHash("sha256").update(decode).digest("hex");

//     const session = await sessionModel.findOne({
//         refreshTokenHash,
//         revoked: false
//     })

//     if (!session) {
//         return res.status(400).json({
//             message: "Invalid refresh token"
//         })
//     }

//     session.revoked = true;
//     await session.save();

//     res.clearCookie("refreshToken")

//     res.status(200).json({
//         message: "Logged out successfully"
//     })

// }


// export async function logoutAll(req, res) {

//     const refreshToken = req.cookies.refreshToken;

//     if (!refreshToken) {
//         return res.status(400).json({
//             message: "Refresh token not found"
//         })
//     }

//     const decode = jwt.verify(refreshToken, config.JWT_SECRET)

//     await sessionModel.updateMany({
//         user: decode.id,
//         revoked: false
//     }, {
//         revoked: true
//     })

//     res.clearCookie("refreshToken")

//     res.status(200).json({
//         message: "Logged out from all devices successfully"
//     })

// }


// export async function verifyEmail(req, res) {
//     const { otp, email } = req.body

//     const otpHash = crypto.createHash("sha256").update(otp).digest("hex");

//     const otpDoc = await otpModel.findOne({
//         email,
//         otpHash
//     })

//     if (!otpDoc) {
//         return res.status(400).json({
//             message: "Invalid OTP"
//         })
//     }

//     const user = await userModel.findByIdAndUpdate(otpDoc.user, {
//         verified: true
//     })

//     await otpModel.deleteMany({
//         user: otpDoc.user
//     })

//     return res.status(200).json({
//         message: "Email verified successfully",
//         user: {
//             username: user.username,
//             email: user.email,
//             verified: user.verified
//         }
//     })
// }







import userModel from "../models/user.model.js";
import sessionModel from "../models/session.model.js";
import otpModel from "../models/otp.model.js";

import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import config from "../config/config.js";
import { sendEmail } from "../services/email.service.js";
import { generateOtp, getOtpHtml } from "../utils/utils.js";

/* =================================
   REGISTER
================================= */
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isAlreadyRegistered = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isAlreadyRegistered) {
      return res.status(409).json({
        message: "Username or email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const otp = generateOtp();
    const html = getOtpHtml(otp);

    // Secure hash for OTP storage
    const otpHash = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    await otpModel.create({
      email,
      user: user._id,
      otpHash,
    });

    await sendEmail(
      email,
      "OTP Verification",
      `Your OTP code is ${otp}`,
      html
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        verified: user.verified,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* =================================
   LOGIN
================================= */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (!user.verified) {
      return res.status(401).json({
        message: "Email not verified",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const refreshToken = jwt.sign(
      { id: user._id },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    const session = await sessionModel.create({
      user: user._id,
      refreshTokenHash,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    const accessToken = jwt.sign(
      {
        id: user._id,
        sessionId: session._id,
      },
      config.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Logged in successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        verified: user.verified,
        createdAt: user.createdAt,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* =================================
   GET ME
================================= */
export const getMe = async (req, res) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    const decode = jwt.verify(
      token,
      config.JWT_SECRET
    );

    const user = await userModel.findById(decode.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        verified: user.verified,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* =================================
   REFRESH TOKEN
================================= */
export const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({
        message: "Refresh token not found",
      });
    }

    const decode = jwt.verify(
      token,
      config.JWT_SECRET
    );

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const session = await sessionModel.findOne({
      refreshTokenHash,
      revoked: false,
    });

    if (!session) {
      return res.status(401).json({
        message: "Invalid refresh token",
      });
    }

    const accessToken = jwt.sign(
      {
        id: decode.id,
        sessionId: session._id,
      },
      config.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const newRefreshToken = jwt.sign(
      { id: decode.id },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const newRefreshTokenHash = crypto
      .createHash("sha256")
      .update(newRefreshToken)
      .digest("hex");

    session.refreshTokenHash = newRefreshTokenHash;
    await session.save();

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Access token refreshed successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* =================================
   LOGOUT
================================= */
export const logout = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(400).json({
        message: "Refresh token not found",
      });
    }

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const session = await sessionModel.findOne({
      refreshTokenHash,
      revoked: false,
    });

    if (!session) {
      return res.status(400).json({
        message: "Invalid refresh token",
      });
    }

    session.revoked = true;
    await session.save();

    res.clearCookie("refreshToken");

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* =================================
   LOGOUT ALL
================================= */
export const logoutAll = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(400).json({
        message: "Refresh token not found",
      });
    }

    const decode = jwt.verify(
      token,
      config.JWT_SECRET
    );

    await sessionModel.updateMany(
      {
        user: decode.id,
        revoked: false,
      },
      {
        revoked: true,
      }
    );

    res.clearCookie("refreshToken");

    return res.status(200).json({
      message: "Logged out from all devices successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* =================================
   VERIFY EMAIL
================================= */
export const verifyEmail = async (req, res) => {
  try {
    const { otp, email } = req.body;

    const otpHash = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    const otpDoc = await otpModel.findOne({
      email,
      otpHash,
    });

    if (!otpDoc) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    const user = await userModel.findByIdAndUpdate(
      otpDoc.user,
      { verified: true },
      { new: true }
    );

    await otpModel.deleteMany({
      user: otpDoc.user,
    });

    return res.status(200).json({
      message: "Email verified successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        verified: user.verified,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};