import "./menu-item.styles.scss";

function MenuItem({ bgImage, title }) {
  return (
    <div className="col-lg-4 col-md-6 ">
      <div className="menu-card ">
        <div className="menu-item">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          ></div>
          <div className="content">
            <h2 className="title">{title}</h2>
            <h4 className="subtitle">shop now</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
