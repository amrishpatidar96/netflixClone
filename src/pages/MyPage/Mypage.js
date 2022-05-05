const Mypage = (props)=>{


    return (
        <div style={{ marginTop: "60px" }} className="flex items-center justify-center bg-netflixBlack w-full min-h-screen">
            <div className="font-bold text-3xl text-netflixRed">
                {props.message}
            </div>
        </div>
    )

}

export default Mypage;