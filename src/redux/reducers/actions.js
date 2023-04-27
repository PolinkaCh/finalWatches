export const setNumber = (num) => {
    return {
        type: "SETNUM",
        num
    }
}
export const openRes = () => {
    return {
        type: "OPENRES"
    }
}
export const selectionType = (choice) => {
    return {
        type: "SELECTTYPE",
        choice
    }
}
export const selectionShape = (choice) => {
    return {
        type: "SELECTSHAPE",
        choice
    }
}
export const selectionColor = (choice) => {
    return {
        type: "SELECTCOLOR",
        choice
    }
}

export const selectionMaterial = (choice) => {
    return {
        type: "SELECTMATERIAL",
        choice
    }
}
export const selectionPrice = (choice) => {
    return {
        type: "SELECTPRICE",
        choice
    }
}
export const selectWatches= (name, id) => {
    return (dispatch) => {
        if (id === "1" && name === "Сенсорный"){
            const choice = "Сенсорный"
            dispatch (selectionType(choice))   
        } else if (id === "1" && name === "Механический"){
            const choice = "Механический"
            dispatch (selectionType(choice))      
        } else if (id === "1" && name === "Кварцевый") {
        const choice = "Кварцевые"
        dispatch (selectionType(choice))
        }
        if (id === "2" && name === "до 10000 руб."){
            const choice = "до 10000 руб."
            dispatch (selectionPrice(choice))         
        } else if (id === "2" && name === "10.000-25.000"){
            const choice = "10.000-25.000"
            dispatch (selectionPrice(choice))      
        } else if (id === "2" && name === "25.000-50.000"){
            const choice = "25.000-50.000"
            dispatch (selectionPrice(choice))      
        } else if (id === "2" && name === "50.000 и выше"){
            const choice = "50.000 и выше"
            dispatch (selectionPrice(choice))      
        };
        if (id === "3" && name === "Прямоугольную"){
            const choice = "Прямоугольные"
            dispatch (selectionShape(choice))         
        } else if (id === "3" && name === "Круг"){
            const choice = "Круг"
            dispatch (selectionShape(choice))      
        };
        if (id === "4" && name === "Черный"){
            const choice = "Черный"
            dispatch (selectionColor(choice))         
        } else if (id === "4" && name === "Серебряный"){
            const choice = "Серебро"
            dispatch (selectionColor(choice))      
        } else if (id === "4" && name === "Синий"){
            const choice = "Синий"
            dispatch (selectionColor(choice))      
        } else if (id === "4" && name === "Розовое золото"){
            const choice = "Розовое золото"
            dispatch (selectionColor(choice))      
        }
        if (id === "5" && name === "Металлический ремешок"){
            const choice = "Металлический"
            dispatch (selectionMaterial(choice))         
        }else if (id === "5" && name === "Кожа натуральная"){
            const choice = "Натуральная кожа"
            dispatch (selectionMaterial(choice))      
        } else if (id === "5" && name === "Кожа искусственная"){
            const choice = "Искусственная кожа"
            dispatch (selectionMaterial(choice))      
        } else if (id === "5" && name === "Силикон"){
            const choice = "Силикон"
            dispatch (selectionMaterial(choice))      
        };
}
}