import React from "react";
import "./componets-css/Addproductin.css";

const Addproductin = () => {
    return (
        <div className="addproductwrapper">
            <div className="registerbox">
                <div className="middlebox">
                    <form>
                        <br /><br />
                        <label className="outerfield">
                            Product Name:
                            <input className="field" type="text" name="firstname" placeholder="Enter Name Of Product" />
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Price:
                            <input className="field" type="text" name="firstname" placeholder="Enter Name Of Price" />
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Image  URL:<br />
                            <textarea className="textarea" placeholder="Enter your Image Url Here."></textarea>
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Info:<br />
                            <textarea className="textarea" placeholder="Enter Product Info Here."></textarea>
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Comapany:
                            <input className="field" type="text" name="firstname" placeholder="Enter Comapany Of Product" />
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Cateogory:
                            <input className="field" type="text" name="firstname" placeholder="Enter Product Cateogory" />
                        </label>
                        <br /><br />
                        <br /><br />
                        <br /><br />
                        <button className="addbtn">
                            <b>ADD PRODUCT</b>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproductin;