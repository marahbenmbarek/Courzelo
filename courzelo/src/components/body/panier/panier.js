import axios from 'axios';
import React, { useEffect } from 'react';
import {

  Button
} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesByUserPanier } from '../../../redux/actions/panierAction';
import './panier.css';

function Panier() {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const paniers = useSelector((state) => state.paniers);
  useEffect(() => {

    dispatch(getAllCoursesByUserPanier(token))
  }, [dispatch(getAllCoursesByUserPanier(token))]);

  const handleDelete = async (id) => {
    try {

      await axios.delete(`/panier/delete/${id}`, {
        headers: { Authorization: token }
      })

    } catch (err) {
    }
  };
  return (

    <div>
      <div className="page-title layout-1">
        <div className="main-top parallax" style={{ backgroundImage: 'url(../wp-content/uploads/sites/5/Panier.jpg)' }}>
          <span className="overlay-top-header" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
          <div className="content container">
            <div className="row">
              <div className="text-title col-md-6">
                <h1>Cart</h1> </div>
              <div className="text-description col-md-6">
                <div className="banner-description"><p><strong className="br">The best demo education </strong> Be successful with Course Builder theme.</p></div> </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-content breadcrumb-plus">
          <div className="breadcrumbs-wrapper container">
            <ul itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs" className="breadcrumbs">
              <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a itemProp="item" href="/" title="Home">
                <span itemProp="name">Home</span></a><meta itemProp="position" content={1} /><span className="breadcrum-icon">
                  <i className="fa fa-angle-right" aria-hidden="true" /></span></li>
              <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <span itemProp="name" title="All courses">Cart</span><meta itemProp="position" content={2} /></li></ul> </div>
        </div>
      </div>


      <div className="container site-content ">
        <div className="row">
          <main id="main" className="site-main col-sm-12 full-width">
            <article
              id="post-384"
              className="post-384 page type-page status-publish hentry pmpro-has-access"
            >
              <div className="entry-content">
                <div className="woocommerce">
                  <div className="woocommerce-notices-wrapper" />
                  <form
                    className="woocommerce-cart-form"
                    action="https://wordpresslms.thimpress.com/demo-elearning-2/cart/"
                    method="post"
                  >
                    <table
                      className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                      cellSpacing={0}
                    >
                      <thead>
                        <tr>
                          <th className="product-thumbnail">&nbsp;</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-remove">&nbsp;</th>

                        </tr>
                      </thead>
                      <tbody>
                        {paniers.map((panier) => (
                          <tr className="woocommerce-cart-form__cart-item cart_item">

                            <td className="product-thumbnail">
                              <img
                                width={200}
                                height={200}
                                src={panier.CourseImg}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt
                                loading="lazy"
                                srcSet={panier.CourseImg}
                                sizes="(max-width: 100px) 100vw, 400px"
                              />
                            </td>
                            <td className="product-name" data-title="Product">
                              {panier.title}
                            </td>
                            <td className="product-price" data-title="Price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  {panier.price}
                                </bdi>
                              </span>
                            </td>
                            <td className="product-remove">
                              <Button

                                className="remove"
                                aria-label="Remove this item"
                               
                                onClick={() => handleDelete(panier._id)}
                              >
                                ×
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </form>
                  <div className="cart-collaterals">
                    <div className="cart_totals ">
                      <h2>Cart totals</h2>
                      <table
                        cellSpacing={0}
                        className="shop_table shop_table_responsive"
                      >
                        <tbody>
                          <tr className="order-total">
                            <th>Total</th>
                            <td data-title="Total">
                              <strong>
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    ...
                                  </bdi>
                                </span>
                              </strong>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="wc-proceed-to-checkout">
                        <a
                          href="../checkout/index.html"
                          className="checkout-button button alt wc-forward"
                        >
                          Proceed to checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>


    </div>
  )

}

export default Panier
