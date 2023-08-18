<template>
    <div class="main">
        <div class="container">
            <div class="tab">
                <div class="header_tab">
                    <div class="content">
                        <div class="left-content">
                        </div>
                        <div class="right-content">
                            <div class="tab-header">
                                <ul class="tabs-header-items">
                                    <li class="tabs-header-item" :class="{ 'active': tabitem == 'analyze' }">
                                        Analyze
                                    </li>
                                    <li class="tabs-header-item" :class="{ 'active': tabitem == 'campaigns' }">
                                        My campaigns
                                    </li>
                                    <li class="tabs-header-item" :class="{ 'active': tabitem == 'configure' }">
                                        Configure
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="body_tab">
                    <div class="content">
                        <div class="left-content">
                            <div class="customer_buttons">
                                <div class="create_new button_white">
                                    <button>
                                        <span class="i-circle">+</span>
                                        <span>
                                            Create new
                                        </span>
                                    </button>
                                </div>

                                <div class="buttons_filter">
                                    <button type="button" @click="changeshowdata('even')"
                                        :class="{ 'active': showdata == 'even' }">
                                        <img src="../assets/images/even.png" alt="Even rows of data">
                                        <span class="text">
                                            <span class="text_h2">
                                                Even rows of data
                                            </span>
                                            <span>
                                                Display rows 2,4,6 etc.
                                            </span>
                                        </span>
                                    </button>
                                    <button type="button" @click="changeshowdata('odd')"
                                        :class="{ 'active': showdata == 'odd' }">
                                        <img src="../assets/images/odd.png" alt="Odd rows of data">
                                        <span class="text">
                                            <span class="text_h2">
                                                Odd rows of data
                                            </span>
                                            <span>
                                                Display rows 1,3,5 etc.
                                            </span>
                                        </span>
                                    </button>
                                    <button type="button" @click="changeshowdata('all')"
                                        :class="{ 'active': showdata == 'all' }">
                                        <img src="../assets/images/all.png" alt="All data">
                                        <span class="text">
                                            <span class="text_h2">
                                                All data
                                            </span>
                                            <span>
                                                Display all data
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div class="right-content">
                            <div>

                                <div class="title">
                                    <h3>
                                        Dashboard
                                    </h3>
                                    <div class="date">
                                        <div class="date-format">
                                            <div class="text-date">
                                                Aug 21, 2021 · Sep 21 2021
                                            </div>
                                            <img src="../assets/images/down.png" alt="">
                                        </div>

                                        <button type="button" class="button-custom-white">
                                            <img src="../assets/images/printer.png" alt="">
                                        </button>
                                        <button type="button" class="button-custom-white">
                                            <img src="../assets/images/download.png" alt="">
                                        </button>
                                    </div>
                                </div>

                                <div class="data-from-server">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td colspan="3" class="title-data">
                                                    <div class="data">
                                                        <div>
                                                            <span class="rot270" @click="changesortaz(true)"
                                                                :class="{ 'active': sortAZ }">></span>
                                                            <span class="rot90" @click="changesortaz(false)"
                                                                :class="{ 'active': !sortAZ }">></span>
                                                        </div>
                                                        <span>Data</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-title">
                                                        Summary 1
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-title">
                                                        Summary 2
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-title">
                                                        Summary 3
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-title">
                                                        Summary 4
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-title">
                                                        Summary 5
                                                    </div>
                                                </td>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in dataFromServer" :key="item.id" v-if="dataFromServer.length">
                                                <td colspan="3" class="title-data">
                                                    <div class="data-text">
                                                        {{ item.title }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-text">
                                                        {{ item.summary1 }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-text">
                                                        {{ item.summary2 }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-text">
                                                        {{ item.summary3 }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-text">
                                                        {{ item.summary4 }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="summary-text">
                                                        {{ item.summary5 }}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr v-else>
                                                <td colspan="12">
                                                    <div class="empty">нет данных</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="search">
                                    <input type="text" placeholder="Search..." v-model="searchtext" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
const showdata = ref("all")
const tabitem = ref('analyze')
const sortAZ = ref(false)
const searchtext = ref("")
let dataFromServer1 = reactive([
    { id: 1, title: "data 1", suummary1: 186, summary2: 186, summary3: 54, summary4: 88, summary5: 10 },
    { id: 3, title: "data 3", suummary1: 78, summary2: 30, summary3: 3, summary4: 9, summary5: 42 },
    { id: 2, title: "data 2", suummary1: 45, summary2: 8, summary3: 86, summary4: 45, summary5: 44 },
    { id: 4, title: "data 4", suummary1: 12, summary2: 55, summary3: 24, summary4: 8, summary5: 75 },
])

const sortOdd = (arr) => {
    let newArr = []
    newArr = arr.filter(item => item.id % 2)
    return newArr
}
const sortEven = (arr) => {
    let newArr = []
    newArr = arr.filter(item => !(item.id % 2))
    return newArr
}
const dataFromServer = computed(() => {
    let arr = []
    arr = dataFromServer1.filter(item => item.title.toLocaleLowerCase().includes(searchtext.value.toLocaleLowerCase()))
    switch (showdata.value) {
        case 'all':
            arr = arr
            break;
        case 'odd':
            arr = sortOdd(arr)
            break;
        case 'even':
            arr = sortEven(arr)
            break;
    }
    if(sortAZ.value){
        arr=arr.sort((item1, item2)=>item1.title.localeCompare(item2.title)).reverse()
    }else{
        arr=arr.sort((item1, item2)=>item1.title.localeCompare(item2.title))
    }
    return arr
})

const changesortaz = (data) => {
    sortAZ.value = data
    // if(data){
    //     dataFromServer.value=dataFromServer.value.sort((item1, item2)=>item1.title.localeCompare(item2.title)).reverse()
    // }else{
    //     dataFromServer.value=dataFromServer.value.sort((item1, item2)=>item1.title.localeCompare(item2.title))
    // }
}
const changeshowdata = (data) => showdata.value = data
</script>
<style lang="scss">
.empty {
    text-align: center;
    font-size: 1rem;
    color: rgb(241, 99, 17);
}

.search {
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;

    input {
        width: 100%;
        height: 32px;
        border-radius: 10px;
        background: transparent;
        padding: 2px 10px;
        box-sizing: border-box;
        border: 1px solid #C6CACC;
    }
}

.data-from-server {
    .title-data {
        width: 30%;
    }

    table {
        width: 100%;
    }

    td {
        padding: 3px 10px;
        box-sizing: border-box;
    }

    thead {
        td {
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
            letter-spacing: 0.44px;
            color: #919699;

            .summary-title {
                text-align: right;
            }

            .data {
                display: flex;
                align-items: center;
                justify-content: flex-start;

                &>span {
                    margin-left: 10px;
                }

                ;

                div {
                    span {
                        background: transparent;
                        display: block;
                        padding: 0;
                        margin: 0;
                        cursor: pointer;

                        &.active {
                            color: #367BF5;
                        }
                    }

                    .rot90 {
                        transform: rotate(90deg) translate(-50%, 0%);
                    }

                    .rot270 {
                        transform: rotate(-90deg) translate(-50%, 0%);
                    }
                }
            }

        }
    }

    tbody {
        td {
            border-top: 1px solid #91969955;
        }
    }

    .summary-text {
        text-align: right;
    }
}

.contanier {
    max-width: 1312px;
    width: 100%;
    margin: auto;
}

.title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-weight: 500;
        font-size: 2rem;
        line-height: 1.2;
        letter-spacing: 0.25px;
        color: #000;
        margin: 0;
    }

    .date {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .date-format {
            display: flex;
            align-items: center;
            font-size: 14px;
            line-height: 1.3;
            letter-spacing: 0.25px;
            font-family: Roboto serif;
            font-weight: 400;
            padding: 5px 12px;
            border: 1px solid #C6CACC;
            border-radius: 4px;
            height: 32px;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }

            img {
                margin-left: 5px;
            }
        }
    }

    .button-custom-white {
        width: 32px;
        height: 32px;
        margin-left: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;

        &:hover {
            opacity: 0.8;
        }
    }
}

.content {
    display: flex;
    align-items: start;
    justify-content: space-between;
    box-sizing: border-box;

    .right-content {
        width: 75%;

        &>div {
            width: 100%;
            padding: 0 64px;
            box-sizing: border-box;
        }
    }

    .left-content {
        width: 25%;
    }
}

.body_tab {
    background: #E2F0F0;
    padding: 32px 0;
}

.tabs-header-items {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .tabs-header-item {
        padding: 12px 16px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        font-family: Roboto serif;
        color: #5E6366;
        cursor: pointer;

        &.active {
            color: #000;
            border: 1px solid #C6CACC;
            border-bottom: none;
            border-radius: 4px 4px 0 0;
        }
    }
}

.create_new {
    margin: auto;
    width: 100%;
    border-radius: 50px;
    margin-bottom: 24px;
    box-shadow: 0px 16px 24px rgba(54, 123, 245, .0256);
    transition: all 0;

    &:hover {
        opacity: 0.8;
    }

    &:hover {
        box-shadow: 0px 16px 24px rgba(54, 123, 245, .0256);
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #367BF5;
        font-size: 20px;
        line-height: 1.4;
        letter-spacing: 0.15px;
        width: 100%;
        height: 100%;
    }

    .i-circle {
        font-size: 16px;
        display: flex;
        width: 16px;
        height: 16px;
        color: #fff;
        background: #367BF5;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        margin-right: 16px;
    }
}

.buttons_filter {
    button {
        margin-bottom: 24px;
        width: 100%;
        display: flex;
        align-items: center;
        background: transparent;

        &.active {
            span {
                color: #000;
                font-weight: 600;
            }

            opacity: 0.8;
        }

        &:hover {
            opacity: 0.8;
        }

        img {
            margin: 0 8px;
        }

        .text {
            width: 100%;
            display: block;
        }

        span {
            text-align: left;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
            color: #5E6366;
        }

        .text_h2 {
            width: 100%;
            display: block;
            margin-bottom: 3px;
            font-size: 1rem;
            line-height: 1.5;
        }
    }
}

.customer_buttons {
    width: 100%;
    padding: 0 64px;
    box-sizing: border-box;
}
</style>