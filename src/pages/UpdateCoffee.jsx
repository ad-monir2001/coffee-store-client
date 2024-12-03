import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

    const handleUpdateCoffee = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
      const updatedCoffee = {
        name,
        quantity,
        supplier,
        taste,
        category,
        details,
        photo,
      };
console.log(updatedCoffee);
  
  
      // send data to server
  
      fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success',
              text: 'Updated coffee',
              icon: 'success',
              confirmButtonText: 'Cool'
          });
          }
        });
    };






  return (
    <div>
      <Helmet>
        <title>Update Coffee</title>
      </Helmet>
      <div className="bg-[#F4F3F0] text-center p-24">
        <h1 className="font-bold text-3xl">Update Coffee</h1>
        
        <form onSubmit={handleUpdateCoffee}>
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
                  defaultValue={name}
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
                  defaultValue={quantity}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                  defaultValue={photo}
                  id=""
                  placeholder="Enter photo URL"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block bg-[#D2B48C] text-[#331A15] border-[#331A15] my-5"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
