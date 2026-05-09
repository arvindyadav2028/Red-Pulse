const nodemailer=require("nodemailer")
const sendEmail= async(to, subject, message)=>{
    try{
const transporter=nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure:false,
    auth:{
        user:process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASS,
    }
})

    const mailOption={
    from:    `"LIFELINE" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html:    message, 
    }
   
    await transporter.sendMail(mailOption);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error("Email sending failed:", error);
        throw new Error("Email could not be sent");
    }
}



module.exports=sendEmail;