import React from "react";

import MenuItem from "../menu-item/menu-item.component";

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: [
        {
          title: "headphones",
          imageUrl: "https://source.unsplash.com/PDX_a_82obo",
          id: 1,
        },
        {
          title: "Tv's",
          imageUrl: "https://source.unsplash.com/HWhR6lbn5xU",
          id: 2,
        },
        {
          title: "Consoles",
          imageUrl: "https://source.unsplash.com/WO4DxFdA3dY",
          id: 3,
        },
        {
          title: "Phones",
          imageUrl: "https://source.unsplash.com/HCoHGXiDMpE",
          id: 4,
        },
        {
          title: "Speakers",
          imageUrl: "https://source.unsplash.com/u8-QI4tRES0",
          id: 5,
        },
        {
          title: "Cameras",
          imageUrl: "https://source.unsplash.com/cwy9yVBBPxg",
          id: 6,
        },
      ],
    };
  }

  render() {
    return (
      <div className="row">
        {this.state.menu.map(({ title, imageUrl, id }) => {
          return <MenuItem key={id} bgImage={imageUrl} title={title} />;
        })}
      </div>
    );
  }
}

export default Menu;
