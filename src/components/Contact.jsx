const Contact = () => {
    return (
        <div className="mt-16 lg:p-10 pb-10  py-10 dark:bg-gray-500">
            <div className="text-center mb-16 space-y-2">
                <h1 className="text-3xl font-semibold text-gray-500 dark:text-white">Contact</h1>
                <p className="text-gray-500 text-sm dark:text-white">Por favor complete y envíe este formulario para contactarnos directamente</p>
            </div>
            <div className="max-w-6xl mx-auto px-2 lg:px-0">
                <div className="flex justify-center flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                        <iframe
                            className="w-full"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={{ border: "0" }} // Use curly braces for style attribute
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9055728367734!2d144.95402561523912!3d-37.817385533948154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642a18b832f8b%3A0x2e4588d4f8cf79ca!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1608083111099!5m2!1sen!2sau"
                            allowFullScreen={true} // Use camelCase for the attribute
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                    <div className="flex-1 space-y-10  relative">
                        <input className="w-full py-4 rounded-sm   text-gray-800 p-2 outline-none border-b-2 border-blue-300" type="text" placeholder="Enter your name" />
                        <input className="w-full py-4 rounded-sm p-2 text-gray-800 outline-none border-b-2 border-blue-300" type="text" placeholder="Enter your email" />
                        <textarea className="textarea w-full h-44 textarea-bordered" placeholder="Type here..."></textarea>
                        <button className=" hover:bg-red-200 w-full  right-0 bottom-0 absolute bg-red-400 py-3 text-white font-semibold">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
