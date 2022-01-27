import React, { useEffect, useState } from 'react';


const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://stark-inlet-11543.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to Delete..!!');
        if (proceed) {
            const url = `https://stark-inlet-11543.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)

                    }
                });
        }
    }
    return (
        <div>
            <h2 className="mb-5 text-success fw-bold">My Orders </h2>
            <div className="services">

                {
                    orders.map(order => <div
                        orders={order}
                        key={order._id}>
                        <div>
                            <h3> Name : {order.name}</h3>
                            <h4>Email : {order.email}</h4>
                            <h4>Address : {order.address}</h4>
                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger"> Delete</button>
                        </div>



                    </div>


                    )
                }
            </div>
        </div>
    );
};

export default Orders;