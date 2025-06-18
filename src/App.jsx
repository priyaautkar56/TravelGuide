import Header from "../components/Header";
import Entry from "../components/Entry";

export default function App() {
  return (
    <>
      <Header />
      <Entry
        mPicture="..\src\assets\nine.jpg"
        country="Japan"
        placeName="Mount-Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        information="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
      />
      <Entry
        mPicture="..\src\assets\six.jpg"
        country="USA"
        placeName="California"
        date="12 Jan, 2021 - 24 Jan, 2021"
        information="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
      />
      <Entry
        mPicture="..\src\assets\two.jpg"
        country="India"
        placeName="Amravati"
        date="28 Jan, 2024 - 20 June, 2025"
        information="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
      />
    </>
  );
}
