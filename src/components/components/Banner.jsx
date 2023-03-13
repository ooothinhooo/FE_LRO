import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
function Banner() {
  const Images = [
    {
      url: "https://png.pngtree.com/background/20210710/original/pngtree-blue-flat-beach-seaside-banner-background-picture-image_1021713.jpg",
      caption: "Slide 1",
      category: "CNTT",
    },
    {
      url: "https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-cartoon-beach-sand-summer-summer-banner-background-image_252368.jpg",
      caption: "Slide 2",
      category: "CNTT",
    },
    {
      url: "https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-summer-graduation-tour-womens-clothing-cool-image_8542.jpg",
      caption: "Slide 3",
      category: "CNTT",
    },
    {
      url: "https://png.pngtree.com/background/20210710/original/pngtree-summer-big-card-love-cartoon-banner-picture-image_1033413.jpg",
      caption: "Slide 3",
      category: "CNTT",
    },
    {
      url: "https://png.pngtree.com/background/20210709/original/pngtree-mid-autumn-festival-creative-banner-background-picture-image_930048.jpg",
      caption: "Slide 3",
      category: "CNTT",
    },
  ];
  return (
    <>
      <div className="w-full h-full">
        <AwesomeSlider className="h-full">
          <div className="w-full h-full" data-src={Images[0].url} />
          <div className="w-full h-full" data-src={Images[1].url} />
          <div className="w-full h-full" data-src={Images[2].url} />
          <div className="w-full h-full" data-src={Images[3].url} />
          <div className="w-full h-full" data-src={Images[4].url} />
          {/* <div className="w-full h-full" data-src={Images[5].url} /> */}
        </AwesomeSlider>
      </div>
    </>
  );
}

export default Banner;
