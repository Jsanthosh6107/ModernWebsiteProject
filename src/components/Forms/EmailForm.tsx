'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import SubmitButton from '@/components/Button/SubmitButton'

type Inputs = {
    name: string
    email: string
    phone: string
    comments?: string // Comments can be optional
}

const EmailForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const result = await response.json()
            console.log(result) // Handle success response
            reset() // Reset the form after successful submission
        } catch (error) {
            console.error('Error sending email:', error) // Handle error
        }
    }

    return (
        <div className="w-full max-w-xs">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                id = {"contact-form"}
            >   
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.name ? 'border-red-500' : ''
                        }`}
                        id="name"
                        {...register("name", {required:true})}
                        placeholder="John Doe"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-xs italic">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.email ? 'border-red-500' : ''
                        }`}
                        id="email"
                        type="email"
                        {...register("email", {required:true})}
                        placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-xs italic">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                    >
                        Phone
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.phone ? 'border-red-500' : ''
                        }`}
                        id="phone"
                        type="tel"
                        {...register("phone", {required:true})}
                        placeholder="731-695-3443"
                    />
                    {errors.phone && (
                        <span className="text-red-500 text-xs italic">
                            {errors.phone.message}
                        </span>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="comments"
                    >
                        Comments
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="comments"
                        {...register("comments")}
                        placeholder="Comments"
                    />
                </div>
                <div className="flex items-center justify-between mt-6">
                    <SubmitButton text="Submit" flipColor={true} classes="fadeUp-300"/>
                </div>
            </form>
        </div>
    )
}

export default EmailForm
