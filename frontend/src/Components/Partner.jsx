function Partners({ image, width = "120px", height = "60px" }) {
    return (
        <div className="bg-white flex items-center justify-center w-[190px] h-[120px]">
            <img style={{ width: `${width}px`, height: `${height}px` }} src={image} alt="Partner Logo" />
        </div>
    );
}
export default Partners;