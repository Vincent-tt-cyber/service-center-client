import React from 'react'
import styles from "./ClientForm.module.scss"
const ClientForm = ({ setShowClientForm }) => {
    return (
        <div className={styles['client-form']}>
            <div className={styles['client-form__content']}>

                <button className={styles['client-form__close']} onClick={() => setShowClientForm(false)} >Закрыть</button>
                <h1>Введите данные</h1>
                <div className={styles['client-form__inputs']}>
                    <div >
                        <h2>Данные клиента</h2>
                        <input type="text" placeholder='Полное ФИО клиента' />
                        <input type="text" placeholder='Номер телефона +7' />
                        <input type="text" placeholder='Дополнительный номер телефона' />
                    </div>
                    <div >
                        <h2>Данные о товаре</h2>
                        <input type="text" placeholder='Устройство' />
                        <input type="text" placeholder='Цвет устройства' />
                    </div>
                    <div  >
                        <h2>Данные о заказе</h2>
                        <input type="number" placeholder='Предварительная цена' />
                        <input type="number" placeholder='Итоговая цена' />
                        <textarea name="" id="" placeholder='Комментарий к заказу'></textarea>
                    </div>
                </div>
                <div className={styles["client-form__buttons"]}>
                    <button>Добавить</button>
                    <button>Отмена</button>
                </div>
            </div>
        </div>
    )
}

export default ClientForm