<template>
    <header class="header">
        <div class="nav">
            <div class="nav-logo">
                <a href="/" class="logo">
                    <img src="../assets/images/logo.png" alt="">
                </a>
            </div>
            <div class="nav-account">
                <div class="help mr-16">
                    <button class="button_grey">
                        Help
                    </button>
                    <span class="warning-help">?</span>
                </div>
                <div class="upgrade  mr-16">
                    <button class="button_white ttu">
                        upgrade
                    </button>
                </div>
                <div class="account">
                    <button type="button" title="Profile">
                        <img src="../assets/images/person.png" alt="">
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref } from "vue"
const help = ref("")
</script>
<style lang="scss">
.header {
    width: 100%;

    .nav {
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding: 12px 16px;
        box-sizing: border-box;

        button {
            height: 40px;
            box-sizing: border-box;
        }
    }
}

.button_white {
    background: #fff;
    color: #367BF5;
    font-weight: 600;
    line-height: 1.2;
    font-size: 14px;
    font-family: Roboto;
    letter-spacing: 0.75px;
    padding: 9px;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px #367BF599;

    &:hover {
        transition: all 0.15s ease-in;
        box-shadow: 0px 0px 1px #367BF599;
    }
}

.button_grey {
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    font-weight: 600;
    line-height: 1.2;
    font-size: 14px;
    font-family: Roboto;
    letter-spacing: 0.75px;
    padding: 9px;
    background: #F7F9FA;
    color: #5E6366dd;

    &:hover {
        transition: all 0.15s ease-in;
        box-shadow: 0px 2px 4px #5E6366dd;
    }
}

.nav-account {
    display: flex;
    align-items: stretch;
}

.account {
    button {
        border-radius: 50px;
    }
}

.help {
    box-sizing: border-box;
    position: relative;

    button {
        height: 100%;
        width: 96px;
        padding: 8px;
        text-align: left;
    }

    .warning-help {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-75%);
        z-index: 1;
        background-color: #C6CACC;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        font-family: Roboto;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
}
</style>