sap.ui.jsview("view.Notes", {

    getControllerName: function () {
        return "view.Notes";
    },

    createContent : function (oController) {

        this.page = new sap.m.Page({
            showNavButton :true,
            showHeader:false,
            content: [],
            footer: []
        });

        var noteTaker1 = new sap.suite.ui.commons.NoteTaker({

            visibleNotes: 4,
            attachmentUploadUrl: "../../../../../upload",
            attachmentSelect: function(e) {
                jQuery.sap.log.info("NTF: Attachment was selected - " + e.getParameter("filename"));
                this.setNextCardUid("Card-" + Math.floor((Math.random() * 1000) + 1));
                this.uploadAttachment();
            },
            attachmentUploadComplete: function(e) {
                jQuery.sap.log.info("NTF: Attachment was uploaded - " + e.getParameter("response") + " UId " + e.getParameter("uid"));
            },
            attachmentDelete: function(e) {
                alert("Attachhment deleted. Attchment: " + e.getParameter("filename") + " Card UID : " + e.getParameter("uid"));
            },
            attachmentClick: function(e) {
                alert("Attachhment click. Attchment: " + e.getParameter("filename") + " Card UID : " + e.getParameter("uid"));
            }
        });

        var card = new sap.suite.ui.commons.NoteTakerCard({

            // uid: Math.floor((Math.random() * 1000) + 1),
            header: "New contract signed!",
            body: "Bob has signed a new 1b contract! Please check at www.sap.com  If you have any questions, please mail to sap@sap.com",
            thumbUp: true,
            tags: ["new_contract", "1on1 ", "Bob"]
        });
        noteTaker1.addCard(card);

        card = new sap.suite.ui.commons.NoteTakerCard({

            // uid: Math.floor((Math.random() * 1000) + 1),
            header: "Bob is not happy with his PRM",
            body: "On PRM meeting today, Bob said he expected to get exceeds expectations rather than meets expectations. He was very frustrated and may be thinking of leaving the company. The following signs look also disturbing: 1 Short-terms actions and short-term talk He stops talking about the long-term and disengages from planning discussions or anything to do with the future 2 Customers give feedback that the level of service has diminished Internal customers noticing that they are no longer getting the care or attention they are accustomed to 3 Disengaging socially with the business and not going on nights out after work 4 Stops volunteering for things Does not offer his help with tasks outside his remit. This no longer serves a purpose for someone who is planning to leave the company. 5 Don’t care attitude Earlier he was very passionate about his job and often enjoyed heated discussions about decisions. Now he simply stops arguing his point and become subservient6. Productivity could decrease or they could start missing deadlines 6 Excessive complaining Bob is getting annoyed about things that he would usually not be bothered by. 7 Other people mention that he is discontent with things 8 Takes more sick days Earlier he did not take too many sick days but since may he is taking quite a few sporadic days. It might be a sign he is looking for another job. 9 Half days/whole days off Takes days or half days off and instead of talking openly about what he is up to in his holiday time (as he used to do) says very little. 10 Dresses differently He is dressing smarter, probably to go on interviews I should talk to him urgently and plan my activities. Most companies have a review structure whereby line managers get face-time with their employees to discuss any issues they have and how their performance is progressing. These are important to get clarity on what people are thinking. If these reviews do not offer more information, it might be an idea to schedule a chat. “You need to make a decision about whether you want to address it. A simple ‘I’ve noticed your attitude has changed, would you like to talk about it?’ can help you to meet the issues head-on,” advises Ely. It can often be the case that the reasons for somebody proactively seeking another job is an emotional reaction",
            thumbDown: true,
            tags: ["PRM", "Bob"],
            attachmentFilename: "attachment.pdf"

        });
        noteTaker1.addCard(card);

        card = new sap.suite.ui.commons.NoteTakerCard({

            header: "Sam is needed on a new project",
            body: "Peter has requested Sam’s assistance to IMS team. Need to discuss his availability.",
            thumbDown: true,
            tags: ["Sam ", "1on1"]

        });
        noteTaker1.addCard(card);

        this.page.addContent(noteTaker1);

      /*  var footer = new sap.m.Bar({
            contentMiddle: [
                new sap.m.Link({
                    text: "Deloitte Digital 2014-2015",
                    target: "_blank"
                })
            ]
        });

        this.page.setFooter(footer);*/
        return this.page;
    }
    
});
