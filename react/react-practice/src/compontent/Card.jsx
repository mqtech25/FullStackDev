
function Card({imgSrc,title,description}){
    return(
        <div class="card">
<img src={imgSrc} className='card__img' alt="" />
        <div class="card__content">
          <p class="card__title">{title}</p>
          <p class="card__description">{description}</p>
        </div>
      </div>
      
    )
}

export default Card;