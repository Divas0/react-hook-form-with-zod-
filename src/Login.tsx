import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {  FieldValues, useForm } from "react-hook-form";
import z from 'zod'


const signupSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(10, "must be 10 words")
  })
  type TsignupSchema=z.infer<typeof signupSchema>

function Login() {


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    
  } = useForm <TsignupSchema> ({resolver:zodResolver(signupSchema)});

 
  const onSubmit=(data:FieldValues)=>{
    console.log(data)

  }

  return (
    <div className="border flex flex-col border-black w-full  h-screen justify-center items-center absolute gap-[10px] ">
      <input
        {...register("name", {required:true} )}
        className="border mt-[30px] w-[250px] py-[10px] text-center border-black rounded-md"
        type="text"
        placeholder="name"
      />
       {errors.name && <p className="text-red-500"> {`${errors.name.message}`}</p>}
      <input
        {...register("email", {
          required:true
        })}
        className="border mt-[20px] w-[250px] py-[10px] text-center border-black rounded-md"
        type="email"
        placeholder="email"
      />
      {errors.email && <p className="text-red-500"> {`${errors.email.message}`}</p>}

      <input
        {...register("password", {
          required:true,
          minLength:8,
        })}
        className="border mt-[20px] w-[250px] py-[10px] text-center border-black rounded-md"
        type="password"
        placeholder="pass"
      />
      {errors.password && <p className="text-red-500"> {`${errors.password.message}`}</p>}
      <button
        onClick={handleSubmit(onSubmit)}
        className="py-[8px] px-[10px] border-black rounded-lg  text-white bg-blue-900  "
        disabled={isSubmitting}
      >
        
        submit
      </button>
    </div>
  );
}

export default Login;

