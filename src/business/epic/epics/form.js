export const input = action$ =>
    action$
        .ofType("ENTER_INPUT")
        .filter(
            action =>
                ["day", "year", "month", "name"].indexOf(action.field) > -1
        )
        .mapTo({ type: "CHECK_DATE" });

export const changeForm = (action$, store) =>
    action$.ofType("CHANGE_FORM").switchMap(({ gift, history }) => {
        const state = store.getState();
        const { canCreate } = state.form;
        if (canCreate)  {
             fbq('track', 'CreateBook', {
                value: 10,
                currency:'USD'
            })
            return [{ type: "CREATE_BOOK", book: gift, history }];
           
        }
        else return [{ type: "OK" }];
    });

export const bookVersion = (action$, store) =>
    action$.ofType("BOOK_VERSION").switchMap(action => {
        const state = store.getState();
        const { currentBookId, ...books } = state.book;
        const book = books[currentBookId];
        const bookVersion = state.builder.bookVersion;
        return [
            { type: "OK" }
            // {
            //     type: "UPDATE_ORDER",
            //     order_id: book.order.id,
            //     params:bookVersion
            // }
        ];
    });
export const shouldOrderSend = (action$, store) =>
    action$.ofType("VALIDATE_FORM").switchMap(({order})=> {
            const orderForm = store.getState().orderForm.order;
            const canConfirm = store.getState().orderForm.canConfirm;
            if(canConfirm) {
                fbq('track', 'Purchase', {
                                    value: orderForm.orderDetails.price.total/324,
                                    currency:'USD'
                                })
                return [
                    {type:"CONFIRM_ORDER", books:orderForm.books, orderDetails:orderForm.orderDetails}
                ];
            }
            else {
                return [{type:"ORDER_NOT_SENT"}];
            }

    });
export const shouldVoucherSend = (action$, store) =>
    action$.ofType("VALIDATE_VOUCHER").switchMap(({elem})=> {
            const voucher = store.getState().voucher.voucherField.value;
            const shouldVoucherSend = store.getState().voucher.shouldVoucherSend;
            if(shouldVoucherSend) {
                fbq('track', 'Lead', { value: 10, currency:'USD' })
                return [
                    {type:"CHECK_VOUCHER"}
                ];
            }
            else {
                return [{type:"VOUCHER_NOT_SENT"}];
            }

    });
export const shouldContactFormSend = (action$, store) =>
    action$.ofType("VALIDATE_CONTACTFORM").switchMap(({contact})=> {
            const canConfirm = store.getState().contactForm.canConfirm;
            if(canConfirm)
                return [
                    {type:"SEND_CONTACTFORM"}
                ];
            else {
                return [{type:"CONTACTFORM_NOT_SENT"}];
            }
    
    });