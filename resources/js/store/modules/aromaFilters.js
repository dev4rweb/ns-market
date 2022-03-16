export default {
    state: {
        isMainFilterOn: true,
        searchAromaSidebar: '',

        categoryMan: false,
        categoryWoman: false,
        categoryUnisex: false,

        categoryC: false,
        categoryD: false,
        categoryK: false,
        categoryM: false,

        morningCategory: false,
        afternoonCategory: false,
        eveningCategory: false,
        morningAfterEveningCategory: false,
        morningAfternoonCategory: false,
        afternoonEveningCategory: false,

        citrusCategory: false,
        waterCategory: false,
        greenCategory: false,
        fruitCategory: false,
        flowerCategory: false,
        softFloralCategory: false,
        floralOrientalCategory: false,
        softOrientalCategory: false,
        orientalCategory: false,
        woodyOrientalCategory: false,
        woodyCategory: false,
        chypreCategory: false,
        wineGlassCategory: false,

        officeCategory: false,
        braveCategory: false,
        confidentCategory: false,
        businessCategory: false,
        sexyCategory: false,
        charmCategory: false,
        elegantCategory: false,
        provocativeCategory: false,
        clubCategory: false,
        sensualCategory: false,
        romanticCategory: false,
        misteryCategory: false,
        sportCategory: false,
        resoluteCategory: false,

        categoryPair: false,
    },
    actions: {
        fetchIsMainFilterOn({commit}, isChecked) {
            commit('setIsMainFilterOn', isChecked)
            if (isChecked) {
                commit('setCategoryMan', false)
                commit('setCategoryWoman', false)
                commit('setCategoryUnisex', false)

                commit('setCategoryC', false)
                commit('setCategoryD', false)
                commit('setCategoryK', false)
                commit('setCategoryM', false)

                commit('setMorningCategory', false)
                commit('setAfternoonCategory', false)
                commit('setEveningCategory', false)
                commit('setMorningAfterEveningCategory', false)
                commit('setMorningAfternoonCategory', false)
                commit('setAfternoonEveningCategory', false)

                commit('setCitrusCategory', false)
                commit('setWaterCategory', false)
                commit('setGreenCategory', false)
                commit('setFruitCategory', false)
                commit('setFlowerCategory', false)
                commit('setSoftFloralCategory', false)
                commit('setFloralOrientalCategory', false)
                commit('setSoftOrientalCategory', false)
                commit('setOrientalCategory', false)
                commit('setWoodyOrientalCategory', false)
                commit('setWoodyCategory', false)
                commit('setChypreCategory', false)
                commit('setWineGlassCategory', false)

                commit('setOfficeCategory', false)
                commit('setBraveCategory', false)
                commit('setConfidentCategory', false)
                commit('setBusinessCategory', false)
                commit('setSexyCategory', false)
                commit('setCharmCategory', false)
                commit('setElegantCategory', false)
                commit('setProvocativeCategory', false)
                commit('setClubCategory', false)
                commit('setSensualCategory', false)
                commit('setRomanticCategory', false)
                commit('setMisteryCategory', false)
                commit('setSportCategory', false)
                commit('setResoluteCategory', false)

                commit('setCategoryPair', false)
            }
        },

        fetchCategoryPair({commit, getters}, isChecked) {
            commit('setCategoryPair', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },

        fetchOfficeCategory({commit, getters}, isChecked) {
            commit('setOfficeCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchBraveCategory({commit, getters}, isChecked) {
            commit('setBraveCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchConfidentCategory({commit, getters}, isChecked) {
            commit('setConfidentCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchBusinessCategory({commit, getters}, isChecked) {
            commit('setBusinessCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchSexyCategory({commit, getters}, isChecked) {
            commit('setSexyCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchCharmCategory({commit, getters}, isChecked) {
            commit('setCharmCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchElegantCategory({commit, getters}, isChecked) {
            commit('setElegantCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchProvocativeCategory({commit, getters}, isChecked) {
            commit('setProvocativeCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchClubCategory({commit, getters}, isChecked) {
            commit('setClubCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchSensualCategory({commit, getters}, isChecked) {
            commit('setSensualCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchRomanticCategory({commit, getters}, isChecked) {
            commit('setRomanticCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchMisteryCategory({commit, getters}, isChecked) {
            commit('setMisteryCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchSportCategory({commit, getters}, isChecked) {
            commit('setSportCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchResoluteCategory({commit, getters}, isChecked) {
            commit('setResoluteCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },

        fetchCitrusCategory({commit, getters}, isChecked) {
            commit('setCitrusCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchWaterCategory({commit, getters}, isChecked) {
            commit('setWaterCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchGreenCategory({commit, getters}, isChecked) {
            commit('setGreenCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchFruitCategory({commit, getters}, isChecked) {
            commit('setFruitCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchFlowerCategory({commit, getters}, isChecked) {
            commit('setFlowerCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchSoftFloralCategory({commit, getters}, isChecked) {
            commit('setSoftFloralCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchFloralOrientalCategory({commit, getters}, isChecked) {
            commit('setFloralOrientalCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchSoftOrientalCategory({commit, getters}, isChecked) {
            commit('setSoftOrientalCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchOrientalCategory({commit, getters}, isChecked) {
            commit('setOrientalCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchWoodyOrientalCategory({commit, getters}, isChecked) {
            commit('setWoodyOrientalCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchWoodyCategory({commit, getters}, isChecked) {
            commit('setWoodyCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchChypreCategory({commit, getters}, isChecked) {
            commit('setChypreCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchWineGlassCategory({commit, getters}, isChecked) {
            commit('setWineGlassCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },

        fetchMorningCategory({commit, getters}, isChecked) {
            commit('setMorningCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchAfternoonCategory({commit, getters}, isChecked) {
            commit('setAfternoonCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchEveningCategory({commit, getters}, isChecked) {
            commit('setEveningCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchMorningAfterEveningCategory({commit, getters}, isChecked) {
            commit('setMorningAfterEveningCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchMorningAfternoonCategory({commit, getters}, isChecked) {
            commit('setMorningAfternoonCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchAfternoonEveningCategory({commit, getters}, isChecked) {
            commit('setAfternoonEveningCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },

        fetchCategoryC({commit, getters}, isChecked) {
            commit('setCategoryC', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchCategoryD({commit, getters}, isChecked) {
            commit('setCategoryD', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchCategoryK({commit, getters}, isChecked) {
            commit('setCategoryK', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchCategoryM({commit, getters}, isChecked) {
            commit('setCategoryM', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])

        },
        fetchCategoryUnisex({commit, getters}, isChecked) {
            commit('setCategoryUnisex', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchCategoryMan({commit, getters}, isChecked) {
            commit('setCategoryMan', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
        fetchCategoryWoman({commit, getters}, isChecked) {
            commit('setCategoryWoman', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
        },
    },
    mutations: {
        setCategoryPair(state, isChecked) {
            state.categoryPair = isChecked
        },

        setOfficeCategory(state, isChecked) {
            state.officeCategory = isChecked
        },
        setBraveCategory(state, isChecked) {
            state.braveCategory = isChecked
        },
        setConfidentCategory(state, isChecked) {
            state.confidentCategory = isChecked
        },
        setBusinessCategory(state, isChecked) {
            state.businessCategory = isChecked
        },
        setSexyCategory(state, isChecked) {
            state.sexyCategory = isChecked
        },
        setCharmCategory(state, isChecked) {
            state.charmCategory = isChecked
        },
        setElegantCategory(state, isChecked) {
            state.elegantCategory = isChecked
        },
        setProvocativeCategory(state, isChecked) {
            state.provocativeCategory = isChecked
        },
        setClubCategory(state, isChecked) {
            state.clubCategory = isChecked
        },
        setSensualCategory(state, isChecked) {
            state.sensualCategory = isChecked
        },
        setRomanticCategory(state, isChecked) {
            state.romanticCategory = isChecked
        },
        setMisteryCategory(state, isChecked) {
            state.misteryCategory = isChecked
        },
        setSportCategory(state, isChecked) {
            state.sportCategory = isChecked
        },
        setResoluteCategory(state, isChecked) {
            state.resoluteCategory = isChecked
        },

        setCitrusCategory(state, isChecked) {
            state.citrusCategory = isChecked
        },
        setWaterCategory(state, isChecked) {
            state.waterCategory = isChecked
        },
        setGreenCategory(state, isChecked) {
            state.greenCategory = isChecked
        },
        setFruitCategory(state, isChecked) {
            state.fruitCategory = isChecked
        },
        setFlowerCategory(state, isChecked) {
            state.flowerCategory = isChecked
        },
        setSoftFloralCategory(state, isChecked) {
            state.softFloralCategory = isChecked
        },
        setFloralOrientalCategory(state, isChecked) {
            state.floralOrientalCategory = isChecked
        },
        setSoftOrientalCategory(state, isChecked) {
            state.softOrientalCategory = isChecked
        },
        setOrientalCategory(state, isChecked) {
            state.orientalCategory = isChecked
        },
        setWoodyOrientalCategory(state, isChecked) {
            state.woodyOrientalCategory = isChecked
        },
        setWoodyCategory(state, isChecked) {
            state.woodyCategory = isChecked
        },
        setChypreCategory(state, isChecked) {
            state.chypreCategory = isChecked
        },
        setWineGlassCategory(state, isChecked) {
            state.wineGlassCategory = isChecked
        },

        setMorningCategory(state, isChecked) {
            state.morningCategory = isChecked
        },
        setAfternoonCategory(state, isChecked) {
            state.afternoonCategory = isChecked
        },
        setEveningCategory(state, isChecked) {
            state.eveningCategory = isChecked
        },
        setMorningAfterEveningCategory(state, isChecked) {
            state.morningAfterEveningCategory = isChecked
        },
        setMorningAfternoonCategory(state, isChecked) {
            state.morningAfternoonCategory = isChecked
        },
        setAfternoonEveningCategory(state, isChecked) {
            state.afternoonEveningCategory = isChecked
        },

        setCategoryUnisex(state, isChecked) {
            state.categoryUnisex = isChecked
        },
        setCategoryWoman(state, isChecked) {
            state.categoryWoman = isChecked
        },
        setCategoryMan(state, isChecked) {
            state.categoryMan = isChecked
        },

        setIsMainFilterOn(state, isOn) {
            state.isMainFilterOn = isOn
        },

        setSearchAromaSidebar(state, searchAroma) {
            state.searchAromaSidebar = searchAroma
        },

        setCategoryC(state, isChecked) {
            state.categoryC = isChecked
        },
        setCategoryD(state, isChecked) {
            state.categoryD = isChecked
        },
        setCategoryK(state, isChecked) {
            state.categoryK = isChecked
        },
        setCategoryM(state, isChecked) {
            state.categoryM = isChecked
        },
    },
    getters: {
        isAllFiltersOff(state) {
            if (
                !state.categoryMan
                && !state.categoryWoman
                && !state.categoryUnisex

                && !state.categoryC
                && !state.categoryD
                && !state.categoryK
                && !state.categoryM

                && !state.morningCategory
                && !state.afternoonCategory
                && !state.eveningCategory
                && !state.morningAfterEveningCategory
                && !state.morningAfternoonCategory

                && !state.citrusCategory
                && !state.waterCategory
                && !state.greenCategory
                && !state.fruitCategory
                && !state.flowerCategory
                && !state.softFloralCategory
                && !state.floralOrientalCategory
                && !state.softOrientalCategory
                && !state.orientalCategory
                && !state.woodyOrientalCategory
                && !state.woodyCategory
                && !state.chypreCategory
                && !state.wineGlassCategory

                && !state.officeCategory
                && !state.braveCategory
                && !state.confidentCategory
                && !state.businessCategory
                && !state.sexyCategory
                && !state.charmCategory
                && !state.elegantCategory
                && !state.provocativeCategory
                && !state.clubCategory
                && !state.sensualCategory
                && !state.romanticCategory
                && !state.misteryCategory
                && !state.sportCategory
                && !state.resoluteCategory

                && !state.categoryPair

            )
                return true
            else return false
        },

        getCategoryPair(state) {
            return state.categoryPair
        },

        getOfficeCategory(state) {
            return state.officeCategory
        },
        getBraveCategory(state) {
            return state.braveCategory
        },
        getConfidentCategory(state) {
            return state.confidentCategory
        },
        getBusinessCategory(state) {
            return state.businessCategory
        },
        getSexyCategory(state) {
            return state.sexyCategory
        },
        getCharmCategory(state) {
            return state.charmCategory
        },
        getElegantCategory(state) {
            return state.elegantCategory
        },
        getProvocativeCategory(state) {
            return state.provocativeCategory
        },
        getClubCategory(state) {
            return state.clubCategory
        },
        getSensualCategory(state) {
            return state.sensualCategory
        },
        getRomanticCategory(state) {
            return state.romanticCategory
        },
        getMisteryCategory(state) {
            return state.misteryCategory
        },
        getSportCategory(state) {
            return state.sportCategory
        },
        getResoluteCategory(state) {
            return state.resoluteCategory
        },

        getCitrusCategory(state) {
            return state.citrusCategory
        },
        getWaterCategory(state) {
            return state.waterCategory
        },
        getGreenCategory(state) {
            return state.greenCategory
        },
        getFruitCategory(state) {
            return state.fruitCategory
        },
        getFlowerCategory(state) {
            return state.flowerCategory
        },
        getSoftFloralCategory(state) {
            return state.softFloralCategory
        },
        getFloralOrientalCategory(state) {
            return state.floralOrientalCategory
        },
        getSoftOrientalCategory(state) {
            return state.softOrientalCategory
        },
        getOrientalCategory(state) {
            return state.orientalCategory
        },
        getWoodyOrientalCategory(state) {
            return state.woodyOrientalCategory
        },
        getWoodyCategory(state) {
            return state.woodyCategory
        },
        getChypreCategory(state) {
            return state.chypreCategory
        },
        getWineGlassCategory(state) {
            return state.wineGlassCategory
        },

        getMorningCategory(state) {
            return state.morningCategory
        },
        getAfternoonCategory(state) {
            return state.afternoonCategory
        },
        getEveningCategory(state) {
            return state.eveningCategory
        },
        getMorningAfterEveningCategory(state) {
            return state.morningAfterEveningCategory
        },
        getMorningAfternoonCategory(state) {
            return state.morningAfternoonCategory
        },
        getAfternoonEveningCategory(state) {
            return state.afternoonEveningCategory
        },

        getCategoryUnisex(state) {
            return state.categoryUnisex
        },
        getCategoryWoman(state) {
            return state.categoryWoman
        },
        getCategoryMan(state) {
            return state.categoryMan
        },

        getIsMainFilterOn(state) {
            return state.isMainFilterOn
        },

        getSearchAromaSidebar(state) {
            return state.searchAromaSidebar
        },

        getCategoryC(state) {
            return state.categoryC
        },
        getCategoryD(state) {
            return state.categoryD
        },
        getCategoryK(state) {
            return state.categoryK
        },
        getCategoryM(state) {
            return state.categoryM
        },
    }
}
