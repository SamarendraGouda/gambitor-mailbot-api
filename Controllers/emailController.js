const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const nodemailer = require("nodemailer");





exports.sendEmail = catchAsync(async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PWD,
        }
      });

    let info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: req.body.schoolEmail,
        subject: "Gambtior- A national-level school championship by IIT Roorkee",
        text: `Respected Sir/Ma'am,Greetings from Outreach, IIT Roorkee.
        
        We invite the students of ${req.body.schoolName} to participate in the first edition of GambitoR.
        
        GambitoR is a National School Championship where only creative thinking and quick wit can guide one to victory. This exam will be conducted in two rounds, the INCEPTION round and the PINNACLE round.
        Students from classes IX to XII are invited to take part in this competition which will consist of three categories, each consisting of the two rounds mentioned earlier, giving them a chance to test their mettle against their peers in this test and improve on them.
        The INCEPTION round will be conducted through online mode nationwide on 5th of February. The top performers will be invited to the campus of IIT Roorkee for the PINNACLE round in the month of March/April. They will get to participate in various competitions as well as experience the beauty, charm and historical significance that crowns the campus of IIT Roorkee.
        The winners of each category will be given cash prizes as well as a trip to a major Science and Technology Institute.
        The registration for the GambitoR will be completely online.
        We request you to encourage participation from your end as well because this endeavor of ours will not be successful without the students’ participation.
        
        For detailed information about GambitoR, please refer to the below-attached brochure.
        Website link: https://gambitor.iitr.ac.in/ \n

        Regards,
        Team Gambitor
        Indian Institute of Technology, Roorkee`,
        attachments: [{
            path: "./assets/GambitoR_Brochure.pdf"
        }],
    });

    console.log("Message sent: %s", info.messageId);
    // console.log("Api Working");
    res.status(201).json({
        status: "success",
        data: "Mail Sent Successfully"
    });
})