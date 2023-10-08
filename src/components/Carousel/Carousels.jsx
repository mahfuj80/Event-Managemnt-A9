import { Carousel } from 'react-carousel-minimal';

function Carousels() {
  const data = [
    {
      image: 'https://i.ibb.co/njpTWPF/anniversary-Banner.png',
      caption: 'Anniversary Festival',
    },
    {
      image: 'https://i.ibb.co/QngcvWT/baby-Banner.png',
      caption: 'Baby Shower',
    },
    {
      image: 'https://i.ibb.co/LzM9MtJ/birth-Day-Banner.png',
      caption: 'Birthday Party',
    },
    {
      image: 'https://i.ibb.co/2SrGTVt/engagement-Banner.png',
      caption: 'Engagement Party',
    },
    {
      image: 'https://i.ibb.co/2c3RZmb/retirment-Banner.png',
      caption: 'Retirement Party',
    },
    {
      image: 'https://i.ibb.co/T8xVWmb/wedding-Banner.png',
      caption: 'Wedding Party',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 auto',
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="full"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              minWidth: 'full',
              maxHeight: '500px',
              margin: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousels;
