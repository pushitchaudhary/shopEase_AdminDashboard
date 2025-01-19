import Swal from "sweetalert2";

// Simple function for confirmation and backend deletion
export const confirmAndDelete = async (deleteApiCall) => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {

            const response = await deleteApiCall();
            console.log('dc :', response)
            if (response.status == 200) {
                Swal.fire("Deleted!", response.message, "success");
            } else  {
                Swal.fire("Error",  response.message || "Something went wrong", "error");
            }
      
    }
};
