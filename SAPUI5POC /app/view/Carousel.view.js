sap.ui.jsview("view.Carousel", {

	getControllerName: function () {
		return "view.Carousel";
	},

	createContent : function (oController) {

		this.page = new sap.m.Page({
			showHeader:false,
			content: [],
			footer: []
		});
        var oCarousel = new sap.ui.commons.Carousel("carousel", {});
oCarousel.setWidth("100%");
oCarousel.setOrientation("horizontal");
oCarousel.addContent(new sap.ui.commons.Image("img1", {
    src: "images/b3.jpg",
    alt: "img1",
    width: "100%",
    height: "600px"

}));

oCarousel.addContent(new sap.ui.commons.Image("img2", {
    src: "images/b1.jpg",
    alt: "img1",
    width: "100%",
    height: "600px"
}));

oCarousel.addContent(new sap.ui.commons.Image("img3", {
    src: "images/b2.jpg",
    alt: "img1",
     width: "100%",
    height: "600px"
}));

oCarousel.addContent(new sap.ui.commons.Image("img4", {
    src: "images/b.jpg",
    alt: "img1",
    width: "1000px",
    height: "600px"
}));





var oCPanel = new sap.ui.commons.Panel({
    showCollapseIcon: false
});

oCPanel.setBorderDesign(sap.ui.commons.enums.BorderDesign.None);
oCPanel.addContent(oCarousel);
	

    

        this.page.addContent(oCPanel);


        var footer = new sap.m.Bar({
            contentMiddle: [
                new sap.m.Link({
                    text: "Deloitte Digital 2014-2015",
                    target: "_blank"
                })
            ]
        });

        this.page.setFooter(footer);
		//this.page.addContent(oMainTab);
		return this.page;
	}
	
});
