export const GifGridItem = ( {title, url} ) => {
    return (
        <div className="card animate__animated animate__bounce animate__slow">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    );
};