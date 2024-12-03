import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar';
const AddCoffee = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };


    // send data to server

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'Added a New coffee',
            icon: 'success',
            confirmButtonText: 'Cool'
        });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Coffee</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="bg-[#F4F3F0] text-center p-24">
        <h1 className="font-bold text-3xl">Add New Coffee</h1>
        <p className="font-medium text-base">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleForm}>
          {/* name and quantity row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Coffee Name"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="quantity"
                  id=""
                  placeholder="Available Quantity"
                />
              </label>
            </div>
          </div>
          {/* Supplier and taste row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="supplier"
                  id=""
                  placeholder="Supplier"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Taste</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="taste"
                  id=""
                  placeholder="Taste"
                />
              </label>
            </div>
          </div>
          {/* Category and Details row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="category"
                  id=""
                  placeholder="Category"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Details</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="details"
                  id=""
                  placeholder="Details"
                />
              </label>
            </div>
          </div>
          {/* photo row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text font-bold">Photo</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="photo"
                  id=""
                  placeholder="Enter photo URL"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block bg-[#D2B48C] text-[#331A15] border-[#331A15] my-5"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
