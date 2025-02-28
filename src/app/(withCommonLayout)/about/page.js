import style from "./About.module.css";

export const metadata = {
  title: "About Us",
  description: "This is about us page",
};

const AboutPage = () => {
  return (
    <div>
      <h1 className={style.text_color}>This is AboutPage component</h1>
    </div>
  );
};

export default AboutPage;
