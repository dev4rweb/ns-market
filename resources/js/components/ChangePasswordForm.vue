<template>
    <form
        class="card data-card needs-validation"
        @submit.prevent="changingPassword"
        novalidate
    >
        <div class="row">
            <div class="col-md-6">
                <div class="form-group form-group-data">
                    <label>Старый пароль <b style="color: red">*</b> </label>
                    <input
                        type="password"
                        class="form-control form-control-lg"
                        :class="{borderRed: isOldPasswordInValid}"
                        v-model="oldPassword"
                        @input="isOldPasswordInValid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isOldPasswordInValid}"
                    >
                        {{ oldPasswordError }}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group form-group-data">
                    <label>Новый пароль<b style="color: red">*</b> </label>
                    <input
                        type="password"
                        class="form-control form-control-lg"
                        :class="{borderRed: isNewPasswordInValid}"
                        v-model="newPassword"
                        @input="isNewPasswordInValid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isNewPasswordInValid}"
                    >
                        {{ newPasswordError }}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group form-group-data">
                    <label>Новый пароль ещё раз<b style="color: red">*</b> </label>
                    <input
                        type="password"
                        class="form-control form-control-lg"
                        :class="{borderRed: isNewPasswordConfirmationInValid}"
                        v-model="newPasswordConfirmation"
                        @input="isNewPasswordConfirmationInValid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isNewPasswordConfirmationInValid}"
                    >
                        {{ newPasswordConfirmationError }}
                    </div>
                </div>
            </div>

            <div class="col-md-6 d-flex justify-content-end align-items-end">
                <button
                    class="btn btn-lg mb-3 btn-info btn-save"
                    type="submit"
                >
                    Изменить пароль
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "ChangePasswordForm",
    data() {
        return {
            oldPassword: '',
            oldPasswordError: '',
            isOldPasswordInValid: false,
            newPassword: '',
            newPasswordError: '',
            isNewPasswordInValid: false,
            newPasswordConfirmation: '',
            newPasswordConfirmationError: '',
            isNewPasswordConfirmationInValid: false,
        }
    },
    methods: {
        ...mapActions(['changePassword']),
        changingPassword() {
            if (!this.oldPassword.trim()) {
                this.oldPasswordError = 'Поле пароля не может быть пустым'
                this.isOldPasswordInValid = true
                return
            }
            if (!this.newPassword.trim()) {
                this.newPasswordError = 'Поле пароля не может быть пустым'
                this.isNewPasswordInValid = true
                return
            }
            if (!this.newPasswordConfirmation.trim()) {
                this.newPasswordConfirmationError = 'Поле пароля не может быть пустым'
                this.isNewPasswordConfirmationInValid = true
                return
            }
            if (this.oldPassword.length < 6) {
                this.oldPasswordError = 'Не менее 6 символов'
                this.isOldPasswordInValid = true
                return
            }
            if (this.newPassword.length < 6) {
                this.newPasswordError = 'Не менее 6 символов'
                this.isNewPasswordInValid = true
                return
            }
            if (this.newPasswordConfirmation.length < 6) {
                this.newPasswordConfirmationError = 'Не менее 6 символов'
                this.isNewPasswordConfirmationInValid = true
                return
            }
            if (this.newPassword !== this.newPasswordConfirmation) {
                this.newPasswordError = 'Пароли не совпадают'
                this.isNewPasswordInValid = true
                this.newPasswordConfirmationError = 'Пароли не совпадают'
                this.isNewPasswordConfirmationInValid = true
                return
            }
            console.log('changingPassword oldPassword', this.oldPassword);
            console.log('changingPassword newPassword', this.newPassword);
            const passwords = {
                old_password: this.oldPassword,
                new_password: this.newPassword,
            }
            this.changePassword(passwords)
        }
    }
}
</script>

<style scoped>
.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
