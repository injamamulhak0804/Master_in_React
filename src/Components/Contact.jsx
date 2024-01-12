const Contact = () =>{
    return (
        <>
            <div className="font-bold max-w-[840px] mx-auto">
                <h1 className="text-3xl mb-10">Contact us</h1>
                <div className="flex flex-col gap-6 max-w-[600px]">
                    <input type="text" className="border h-10 pl-2" placeholder="Name" />
                    <textarea className="border pl-2" placeholder="Message"
                     id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </>
    )
}

export default Contact 