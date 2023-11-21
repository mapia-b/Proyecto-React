// form realizado con react hook form para practicar incorporar librerias
// formulario dado que no tenemos log in

import classes from './CheckoutForm.module.css'
import { useForm } from "react-hook-form";

const CheckoutForm = (createOrder) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <section className={classes.container}>
    {/*"handleSubmit" will validate your inputs before invoking "onSubmit" */ }
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      {/* Input para el nombre */}
      <div className={classes.inputs}>
        <label htmlFor="name">Nombre y apellido</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Este campo es requerido</span>}
      </div>

      {/* Input para el teléfono */}
      <div className={classes.inputs}>
        <label htmlFor="phone">Teléfono</label>
        <input type="tel" {...register("phone", { required: true })} />
        {errors.phone && <span>Este campo es requerido</span>}
      </div>

      {/* Input para el email */}
      <div className={classes.inputs}>
        <label htmlFor="example">Email</label>
        <input type="email" defaultValue="@" {...register("example")} />
      </div>
      
      <button onSubmit={createOrder} className={classes.orden}>Crear orden</button> 

      {/* <input type="submit" /> */}
    </form>
    </section>
  );
}

export default CheckoutForm;

