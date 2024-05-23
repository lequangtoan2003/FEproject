import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that allows individuals and businesses to buy and sell goods or services over the internet. These websites are essentially virtual stores or marketplaces where transactions are conducted electronically. E-commerce sites can range from large online retailers like Amazon, eBay, and Alibaba to small-scale online shops created by individuals or small businesses.</p>
            <p>E-commerce websites have revolutionized the way we shop, offering convenience, a broader selection of products, competitive pricing, and accessibility to anyone with internet access.</p>
        </div>
    </div>
  )
}

export default DescriptionBox