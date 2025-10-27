import React from 'react'
import styles from "./ClientCard.module.scss"

const ClientCard = ({ client }) => {
    return (
        <>
            <div className={styles["client-card"]}>
                <b>Заказ No{client.orderID}</b>
                <h3 className={styles["client-card__name"]}>{client.fullName}</h3>
                <p className={styles["client-card__phone"]} >Телефон: {client.phone}</p>
                <p className={styles["client-card__device"]} >Устройство: {client.device}</p>
                <p className={styles["client-card__color-device"]} >Цвет устройства: {client.colorDevice}</p>
                <p className={styles["client-card__total"]} >Итоговая сумма: <b>{client.total} ₽</b></p>
            </div>
        </>
    )
}

export default ClientCard