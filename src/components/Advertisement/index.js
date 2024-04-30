import React from 'react';
import { AdvertisementContainer, AdTile, AdImage } from "./styled";

// Import zdjęć z dysku
import reklama1 from '../../Images/reklama.png';
import reklama2 from '../../Images/reklama.png';
import reklama3 from '../../Images/reklama.png';

const Advertisement = () => {
    // Określenie zdjęć w tablicy advertisements
    const advertisements = [
      { id: 1, image: reklama1, website: 'https://www.companya.com' },
      { id: 2, image: reklama2, website: 'https://www.companyb.com' },
      { id: 3, image: reklama3, website: 'https://www.companyc.com' },
      // Dodaj więcej danych reklamowych w razie potrzeby
    ];
  
    return (
      <AdvertisementContainer>
        {advertisements.map(ad => (
          <AdTile key={ad.id} href={ad.website} target="_blank" rel="noopener noreferrer">
            <AdImage src={ad.image} alt={`Advertisement ${ad.id}`} />
          </AdTile>
        ))}
      </AdvertisementContainer>
    );
  };
  
  export default Advertisement;