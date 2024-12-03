import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              const remaining = coffees.filter(cof => cof._id !== _id)

              setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="flex bg-[#F5F4F1] gap-4">
      <div>
        <img src={photo} alt="" className="w-44 h-60" />
      </div>
      <div>
        <p>Name: {name}</p>
        <p>Supplier: {supplier}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="flex flex-col">
        <button className="btn">View</button>
        <Link to={`updateCoffee/${_id}`}>
          <button className="btn">Update</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;