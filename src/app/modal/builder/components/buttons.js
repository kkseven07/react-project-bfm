import React from "react";
import { Button } from "../../../shared";
export default ({ close, onSave }) => {
    return <div
        className="flex width-full space-between"
        style={{ padding: 20, paddingTop: 0, paddingBottom: 0 }}
    >

        <Button click={() => close()}>Назад</Button>
        <Button click={() => console.log("save")}>Сохранить</Button>
    </div>;
};
