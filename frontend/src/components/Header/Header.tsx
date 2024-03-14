import logo from '../../BowlingLogo.png';

function Header() {
  return (
    <div>
      {/* logos */}
      <div className="row navbar-dark bg-dark">
        <img src={logo} className="col-2" alt="logo" />
        <p className="col-3"></p>
        <img src={logo} className="col-2" alt="logo" />
        <p className="col-3"></p>
        <img src={logo} className="col-2" alt="logo" />
      </div>
      <br />
      <div className="container">
        <div className="card card-header rounded">
          {/* Heading */}
          <h2>Bowling League Website: React & ASP.NET Integration</h2>
        </div>
        <br />
        {/* Description */}
        <p className="blockquote text-justify">
          Explore bowler information effortlessly with our Bowling League
          website. Seamlessly blending React and ASP.NET technologies, our
          platform provides a user-friendly interface to access bowler details.
          Discover bowler names, team affiliations, addresses, and contact
          information. Dive into the world of bowling with ease, focusing on
          Marlins and Sharks team members. Get ready to experience bowling data
          like never before!
        </p>
        <br />
      </div>
    </div>
  );
}

export default Header;
