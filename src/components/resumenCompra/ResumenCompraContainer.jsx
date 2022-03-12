import React from "react";
import { useCart } from "react-use-cart";
import "./resumenCompra.css";
import Cancel from "../../assets/delete.png";
import Minus from "../../assets/minus1.png";
import Plus from "../../assets/plus1.png";
import Logo from "../../assets/Logo.svg";

const ResumenCompra = (props) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <div className="emptyCarContainer">
        <h3 className="emptyCarTitle">Carrito vacio</h3>
        <img className="emptyCarImg" src={Logo} />
      </div>
    );
  return (
    <div className="resumenCompraContainer">
      <table className="resumenCompraTableContainer">
        <tbody className="resumenCompraTable">
          <tr className="resumenCompraTableTitle">
            <th className="">Eliminar</th>
            <th className="">Producto</th>
            <th className="">Descripción</th>
            <th className="">Cantidad</th>
            <th className="">Agregar/Quitar</th>
            <th className="">Valor Unitario</th>
            <th className="">Subtotal</th>
          </tr>

          {items.map((item, index) => {
            return (
              <tr className="" key={index}>
                <td className="resumenCompraTableIcon">
                  <img
                    src={Cancel}
                    className=""
                    onClick={() => removeItem(item.id)}
                  />
                </td>

                <td className="">
                  <img
                    src={item.img}
                    alt=""
                    style={{ height: "6rem" }}
                    className=""
                  />
                </td>

                <td className="">{item.description}</td>
                <td> ({item.quantity})</td>
                <td className="resumenCompraTableIcon">
                  <img
                    src={Plus}
                    className=""
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  />
                  <img
                    src={Minus}
                    className=""
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  />
                </td>
                <td className="">${item.price}</td>
                <td className="">${item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="resumenCompraEnd">
        <div className="resumenCompraEndTitle">
          <h3 className="">Total a pagar:$ {cartTotal} COP</h3>
        </div>
        <div className="">
          <button className="btnVer" onClick={() => emptyCart()}>
            Vaciar carrito
          </button>
          <button className="btnAdd">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default ResumenCompra;
