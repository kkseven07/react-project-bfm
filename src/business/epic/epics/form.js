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
        if (canCreate) return [{ type: "CREATE_BOOK", book: gift, history }];
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
export const sendOrder = (action$, store) =>
    action$.ofType("VALIDATE_FORM").switchMap(({order})=> {
        console.log("epicsendorder")
            const orderForm = store.getState().orderForm.order;
            const canConfirm = store.getState().orderForm.canConfirm;
            if(canConfirm)
                return [
                    {type:"CONFIRM_ORDER", books:orderForm.books, orderDetails:orderForm.orderDetails}
                ];
            else {
                return [{type:"ORDER_NOT_SENT"}];
            }

    });