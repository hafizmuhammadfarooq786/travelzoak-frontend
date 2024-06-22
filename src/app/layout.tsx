import './globals.css';
import RootLayout from './rootLayout';

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="TravelZoak (PVT) - Your Gateway to Explore Beautiful Places in Pakistan"
        />
        <meta
          name="keywords"
          content="TravelZoak, Travel Agency, Pakistan Travel, Hunza, Skardu, Neelam Valley, Murree, Nathia Gali, Muskpuri, Tourism, Adventure, Vacation"
        />
        <meta name="author" content="TravelZoak" />
        <meta name="robots" content="index, follow" />
        <title>TravelZoak (PVT) - Explore Beautiful Places in Pakistan</title>
        <link href="favicon.ico" rel="shortcut icon" type="image/ico" />
        <meta
          property="og:title"
          content="TravelZoak (PVT) - Explore Beautiful Places in Pakistan"
        />
        <meta
          property="og:description"
          content="Your Gateway to Explore Hunza, Skardu, Neelam Valley, Murree, Nathia Gali, Muskpuri, and More"
        />
        <meta
          property="og:image"
          content="https://www.travelzoak.com/images/logo.png"
        />
        <meta property="og:url" content="https://www.travelzoak.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TravelZoak (PVT) - Explore Beautiful Places in Pakistan"
        />
        <meta
          name="twitter:description"
          content="Your Gateway to Explore Hunza, Skardu, Neelam Valley, Murree, Nathia Gali, Muskpuri, and More"
        />
        <meta
          name="twitter:image"
          content="https://www.travelzoak.com/images/logo.png"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="website" />
        <meta
          content="keywords"
          name="Travelzoak Pakistan, Hunza travel guide, Skardu tourism, Kashmir vacations, Murree sightseeing, Pakistan travel destinations, Hunza Valley tours, Skardu trekking adventures, Kashmir holiday packages, Murree hill station, Northern Pakistan exploration, Hunza Valley travel tips, Skardu tourism packages, Kashmir travel agency, Murree tourist attractions, Pakistan adventure trips, Hunza Valley accommodations, Skardu hiking trails, Kashmir cultural experiences, Murree weather updates"
        />
      </head>
      <body>
        <RootLayout>{children}</RootLayout>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </body>
    </html>
  );
}
