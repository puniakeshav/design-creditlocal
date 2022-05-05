import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Jodhpur's</span>
        <span className="headerTitleLg">Indigenous Medicines </span>
        <p className="headerTitleSm2">Welcome! You’ve landed on ‘Indigenous Medicines of Jodhpur’, a website that would enrich your knowledge and curiosity about the local medicinal plants in the Jodhpur district. Following is an extensive list of plants that we’ve found through our research</p>
      </div>
      <img
        className="headerImg"
        src="https://github.com/puniakeshav/images/blob/main/home.jpg?raw=true&h=650&w=940"
        alt=""
      />
    </div>
  );
}
