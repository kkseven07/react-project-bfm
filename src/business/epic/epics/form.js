export const input = action$ =>
    action$
        .ofType("ENTER_INPUT")
        .filter(
            action =>
                ["day", "year", "month", "name"].indexOf(action.field) > -1
        )
        .mapTo({ type: "CHECK_DATE" });

export const changeForm = action$ =>
    action$
        .ofType("CHANGE_FORM")
        .filter(({ bool, part }) => {
            return part === "partTwo";
        })
        .mapTo({ type: "ME" });

export const bookVersion = (action$, store) =>
    action$.ofType("BOOK_VERSION").switchMap(action => {
        const state = store.getState();
        const { currentBookId, ...books } = state.book;
        const book = books[currentBookId];
        const bookVersion = state.builder.bookVersion;
        return [
            {
                type: "UPDATE_ORDER",
                order_id: book.order.id,
                params:bookVersion
            }
        ];
    });
