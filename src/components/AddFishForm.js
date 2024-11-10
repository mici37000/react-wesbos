import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
        <input type="text" ref={this.priceRef} name="price" placeholder="Price" />
        <select ref={this.statusRef} name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={this.descRef} name="desc" placeholder="Description"></textarea>
        <input type="text" ref={this.imageRef} name="image" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
