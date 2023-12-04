const ItemCount = () => {
    const [count, setCount] = React.useState(0)

    const IncrementarContardor = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const DecrementarContador = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    

    const addCart = () => {
        if (count > 0) {
            toast.success(`Has agregado ${count} producto/s al carrito`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error('No has seleccionado ningun producto', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <>
 
        
        </>
    );
};