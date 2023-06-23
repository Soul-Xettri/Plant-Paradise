import { Button } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <div>
      <section className="product product-v5" style={{paddingTop:"100px",paddingBottom:"20px",display:"flex",justifyContent:"center"}}>
        <div className="  wrap-blog   ">
          <div className="container">
            <div className="gallery gallery-restaurant clearfix">
              {/* <!-- FILTER --> */}
              <div className="gallery-cat   text-center ">
                <h2 className="title-h3" style={{textAlign:"center"}}>Our Products</h2>
              </div>
              {/* <!-- END / FILTER --> */}
              {/* <!-- GALLERY CONTENT --> */}
              <div className="gallery-content">
                <div className="row">
                  <div
                    className="gallery-isotope col-4 "
                    style={{ position: "relative", height: "907.5px" }}
                  >
                    {/* <!-- ITEM SIZE --> */}
                    <div className="item-size "></div>
                    {/* <!-- END / ITEM SIZE --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope suite dining design"
                      style={{ position: "absolute", left: " 0%; top: 0px" }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_10.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                              <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope suite dining design"
                      style={{
                        position: "absolute",
                        left: "24.9573%",
                        top: "0px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_07.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope suite dining design"
                      style={{ position: "absolute", left: "50%", top: "0px" }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_09.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope suite dining design"
                      style={{
                        position: "absolute",
                        left: "74.9573%",
                        top: "0px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_08.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope suite dining design"
                      style={{ position: "absolute", left: "0%", top: "302px" }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_07.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope suite dining design"
                      style={{
                        position: "absolute",
                        left: "24.9573%",
                        top: "302px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_07.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope  ground  suite dining"
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "302px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_06.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope  ground bathroom dining"
                      style={{
                        position: "absolute",
                        left: "74.9573%",
                        top: "302px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_05.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM -->
                            <!-- ITEM --> */}
                    <div
                      className="item-isotope  ground bathroom dining"
                      style={{
                        position: "absolute",
                        left: "0%",
                        top: "605px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_04.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM -->
                            <!-- ITEM --> */}
                    <div
                      className="item-isotope  dining  design"
                      style={{
                        position: "absolute",
                        left: "24.9573%",
                        top: "605px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_03.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope  ground suite bathroom dining design"
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "605px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_02.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="old-price">
                                  <del>$750.00</del>
                                </span>
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div
                      className="item-isotope ground suite dining bathroom"
                      style={{
                        position: "absolute",
                        left: "74.9573%",
                        top: "605px",
                      }}
                    >
                      <div className="wrap-box-1">
                        <div className="box-img">
                          <Link to="">
                            <img
                              src="../src/assets/images/pro_01.jpg"
                              className="img-responsive"
                              alt="Product"
                              title="images products"
                            />
                          </Link>
                          <div className="content-item">
                            <h5 className="title-h5">
                              <Link to="">House Shape Close</Link>
                            </h5>
                            <div className="bottom">
                              <div className="text-left pull-left">
                                <span className="price">$350.00</span>
                              </div>
                              <div className="text-right">
                                <span className="height">133 cm</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-product">
                            <div className="wrap-btn">
                            <span>
                                <Link to = "#">
                              <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faHeart} className="icon-wishlist"/>
                              </Link>
                              </span>
                              <span>
                              <Link to = "#">

                              <FontAwesomeIcon icon={faSearch}  className="icon-search"/>
                              </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END / ITEM --> */}
                  </div>
                </div>
              </div>
              {/* <!-- GALLERY CONTENT --> */}
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <Button  className="plantButton"style={{animationDelay:"1.4s"}}>
        Buy Now
      </Button>
      </div>
          </div>
        </div>
      </section>
    </div>
  );
}
