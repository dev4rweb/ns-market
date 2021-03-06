import {multiLevelFilter} from "../utils/multiLevelFilter";

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
        fetchIsMainFilterOn({commit, getters}, isChecked) {
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

                commit('setAromaGroupsFilter', getters['getAromaGroups'])
            }
        },

        fetchCategoryPair({commit, getters, dispatch}, isChecked) {
            commit('setCategoryPair', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            dispatch('updateFilter')
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
            }
        },

        fetchOfficeCategory({commit, getters, dispatch}, isChecked) {
            commit('setOfficeCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchBraveCategory({commit, getters, dispatch}, isChecked) {
            commit('setBraveCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchConfidentCategory({commit, getters, dispatch}, isChecked) {
            commit('setConfidentCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchBusinessCategory({commit, getters, dispatch}, isChecked) {
            commit('setBusinessCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchSexyCategory({commit, getters, dispatch}, isChecked) {
            commit('setSexyCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchCharmCategory({commit, getters, dispatch}, isChecked) {
            commit('setCharmCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchElegantCategory({commit, getters, dispatch}, isChecked) {
            commit('setElegantCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchProvocativeCategory({commit, getters, dispatch}, isChecked) {
            commit('setProvocativeCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchClubCategory({commit, getters, dispatch}, isChecked) {
            commit('setClubCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchSensualCategory({commit, getters, dispatch}, isChecked) {
            commit('setSensualCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchRomanticCategory({commit, getters, dispatch}, isChecked) {
            commit('setRomanticCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchMisteryCategory({commit, getters, dispatch}, isChecked) {
            commit('setMisteryCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchSportCategory({commit, getters, dispatch}, isChecked) {
            commit('setSportCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchResoluteCategory({commit, getters, dispatch}, isChecked) {
            commit('setResoluteCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },

        fetchCitrusCategory({commit, getters, dispatch}, isChecked) {
            commit('setCitrusCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchWaterCategory({commit, getters, dispatch}, isChecked) {
            commit('setWaterCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchGreenCategory({commit, getters, dispatch}, isChecked) {
            commit('setGreenCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchFruitCategory({commit, getters, dispatch}, isChecked) {
            commit('setFruitCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchFlowerCategory({commit, getters, dispatch}, isChecked) {
            commit('setFlowerCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchSoftFloralCategory({commit, getters, dispatch}, isChecked) {
            commit('setSoftFloralCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchFloralOrientalCategory({commit, getters, dispatch}, isChecked) {
            commit('setFloralOrientalCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchSoftOrientalCategory({commit, getters, dispatch}, isChecked) {
            commit('setSoftOrientalCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchOrientalCategory({commit, getters, dispatch}, isChecked) {
            commit('setOrientalCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchWoodyOrientalCategory({commit, getters, dispatch}, isChecked) {
            commit('setWoodyOrientalCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchWoodyCategory({commit, getters, dispatch}, isChecked) {
            commit('setWoodyCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchChypreCategory({commit, getters, dispatch}, isChecked) {
            commit('setChypreCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchWineGlassCategory({commit, getters, dispatch}, isChecked) {
            commit('setWineGlassCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },

        fetchMorningCategory({commit, getters, dispatch}, isChecked) {
            commit('setMorningCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchAfternoonCategory({commit, getters, dispatch}, isChecked) {
            commit('setAfternoonCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchEveningCategory({commit, getters, dispatch}, isChecked) {
            commit('setEveningCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchMorningAfterEveningCategory({commit, getters, dispatch}, isChecked) {
            commit('setMorningAfterEveningCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchMorningAfternoonCategory({commit, getters, dispatch}, isChecked) {
            commit('setMorningAfternoonCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchAfternoonEveningCategory({commit, getters, dispatch}, isChecked) {
            commit('setAfternoonEveningCategory', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },

        fetchCategoryC({commit, getters, dispatch}, isChecked) {
            commit('setCategoryC', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchCategoryD({commit, getters, dispatch}, isChecked) {
            commit('setCategoryD', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchCategoryK({commit, getters, dispatch}, isChecked) {
            commit('setCategoryK', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchCategoryM({commit, getters, dispatch}, isChecked) {
            commit('setCategoryM', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchCategoryUnisex({commit, getters, dispatch}, isChecked) {
            commit('setCategoryUnisex', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchCategoryMan({commit, getters, dispatch}, isChecked) {
            commit('setCategoryMan', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        fetchCategoryWoman({commit, getters, dispatch}, isChecked) {
            commit('setCategoryWoman', isChecked)
            commit('setIsMainFilterOn', getters['isAllFiltersOff'])
            commit('setCategoryPair', false)
            dispatch('updateFilter')
        },
        /* multi level filter */
        /*https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72*/
        updateFilter({getters, commit}) {

            let genders = []
            if (getters['getCategoryWoman']) genders.push('??')
            if (getters['getCategoryMan']) genders.push('??')
            if (getters['getCategoryUnisex']) genders.push('??')
            if (!genders.length) genders = ['??', '??', '??']

            let codes = []
            if (getters['getCategoryC']) codes.push('C')
            if (getters['getCategoryD']) codes.push('D')
            if (getters['getCategoryK']) codes.push('K')
            if (getters['getCategoryM']) codes.push('M')
            if (!codes.length) codes = ['C', 'D', 'K', 'M']

            let daily = []
            if (getters['getMorningCategory']) daily.push('????????????????')
            if (getters['getAfternoonCategory']) daily.push('??????????????')
            if (getters['getEveningCategory']) daily.push('????????????????')
            if (getters['getMorningAfterEveningCategory']) daily.push('????????????????, ??????????????, ????????????????')
            if (getters['getMorningAfternoonCategory']) daily.push('????????????????, ??????????????')
            if (getters['getAfternoonEveningCategory']) daily.push('??????????????, ????????????????')
            if (!daily.length)
                daily = [
                    '????????????????',
                    '??????????????',
                    '????????????????',
                    '????????????????, ??????????????, ????????????????',
                    '????????????????, ??????????????',
                    '??????????????, ????????????????'
                ]

            let smells = []
            if (getters['getCitrusCategory']) smells.push('????????????????????')
            if (getters['getWaterCategory']) smells.push('????????????')
            if (getters['getGreenCategory']) smells.push('??????????????')
            if (getters['getFruitCategory']) smells.push('??????????????????')
            if (getters['getFlowerCategory']) smells.push('??????????????????')
            if (getters['getSoftFloralCategory']) smells.push('???????????? ??????????????????')
            if (getters['getFloralOrientalCategory']) smells.push('?????????????????? ??????????????????')
            if (getters['getSoftOrientalCategory']) smells.push('???????????? ??????????????????')
            if (getters['getOrientalCategory']) smells.push('??????????????????')
            if (getters['getWoodyOrientalCategory']) smells.push('?????????????????? ??????????????????')
            if (getters['getWoodyCategory']) smells.push('??????????????????')
            if (getters['getChypreCategory']) smells.push('????????????????')
            if (getters['getWineGlassCategory']) smells.push('????????????????')
            if (!smells.length)
                smells = [
                    '????????????????????',
                    '????????????',
                    '??????????????',
                    '??????????????????',
                    '??????????????????',
                    '???????????? ??????????????????',
                    '?????????????????? ??????????????????',
                    '???????????? ??????????????????',
                    '??????????????????',
                    '?????????????????? ??????????????????',
                    '??????????????????',
                    '????????????????',
                    '????????????????'
                ]

            let spirits = []
            if (getters['getOfficeCategory']) spirits.push('??????????????')
            if (getters['getBraveCategory']) spirits.push('????????????')
            if (getters['getConfidentCategory']) spirits.push('??????????????????')
            if (getters['getBusinessCategory']) spirits.push('????????????')
            if (getters['getSexyCategory']) spirits.push('??????????????????????')
            if (getters['getCharmCategory']) spirits.push('????????????????')
            if (getters['getElegantCategory']) spirits.push('????????????????????')
            if (getters['getProvocativeCategory']) spirits.push('????????????????????????????')
            if (getters['getClubCategory']) spirits.push('??????????????')
            if (getters['getSensualCategory']) spirits.push('??????????????????????')
            if (getters['getRomanticCategory']) spirits.push('??????????????????????????')
            if (getters['getMisteryCategory']) spirits.push('????????????????????????')
            if (getters['getSportCategory']) spirits.push('????????????????????')
            if (getters['getResoluteCategory']) spirits.push('??????????????????????')
            if (!spirits.length)
                spirits = [
                    '??????????????',
                    '????????????',
                    '??????????????????',
                    '????????????',
                    '??????????????????????',
                    '????????????????',
                    '????????????????????',
                    '????????????????????????????',
                    '??????????????',
                    '??????????????????????',
                    '??????????????????????????',
                    '????????????????????????',
                    '????????????????????',
                    '??????????????????????',
                ]

            let universals = []
            if (getters['getMorningCategory']) universals.push('????????????????')
            if (getters['getAfternoonCategory']) universals.push('??????????????')
            if (getters['getEveningCategory']) universals.push('????????????????')
            if (getters['getMorningAfterEveningCategory']) universals.push('????????????????, ??????????????, ????????????????')
            if (getters['getMorningAfternoonCategory']) universals.push('????????????????, ??????????????')
            if (getters['getAfternoonEveningCategory']) universals.push('??????????????, ????????????????')

            if (getters['getCitrusCategory']) universals.push('????????????????????')
            if (getters['getWaterCategory']) universals.push('????????????')
            if (getters['getGreenCategory']) universals.push('??????????????')
            if (getters['getFruitCategory']) universals.push('??????????????????')
            if (getters['getFlowerCategory']) universals.push('??????????????????')
            if (getters['getSoftFloralCategory']) universals.push('???????????? ??????????????????')
            if (getters['getFloralOrientalCategory']) universals.push('?????????????????? ??????????????????')
            if (getters['getSoftOrientalCategory']) universals.push('???????????? ??????????????????')
            if (getters['getOrientalCategory']) universals.push('??????????????????')
            if (getters['getWoodyOrientalCategory']) universals.push('?????????????????? ??????????????????')
            if (getters['getWoodyCategory']) universals.push('??????????????????')
            if (getters['getChypreCategory']) universals.push('????????????????')
            if (getters['getWineGlassCategory']) universals.push('????????????????')

            if (getters['getOfficeCategory']) universals.push('??????????????')
            if (getters['getBraveCategory']) universals.push('????????????')
            if (getters['getConfidentCategory']) universals.push('??????????????????')
            if (getters['getBusinessCategory']) universals.push('????????????')
            if (getters['getSexyCategory']) universals.push('??????????????????????')
            if (getters['getCharmCategory']) universals.push('????????????????')
            if (getters['getElegantCategory']) universals.push('????????????????????')
            if (getters['getProvocativeCategory']) universals.push('????????????????????????????')
            if (getters['getClubCategory']) universals.push('??????????????')
            if (getters['getSensualCategory']) universals.push('??????????????????????')
            if (getters['getRomanticCategory']) universals.push('??????????????????????????')
            if (getters['getMisteryCategory']) universals.push('????????????????????????')
            if (getters['getSportCategory']) universals.push('????????????????????')
            if (getters['getResoluteCategory']) universals.push('??????????????????????')

            if (!universals.length)
                universals = [
                    '????????????????',
                    '??????????????',
                    '????????????????',
                    '????????????????, ??????????????, ????????????????',
                    '????????????????, ??????????????',
                    '??????????????, ????????????????',

                    '????????????????????',
                    '????????????',
                    '??????????????',
                    '??????????????????',
                    '??????????????????',
                    '???????????? ??????????????????',
                    '?????????????????? ??????????????????',
                    '???????????? ??????????????????',
                    '??????????????????',
                    '?????????????????? ??????????????????',
                    '??????????????????',
                    '????????????????',
                    '????????????????',

                    '??????????????',
                    '????????????',
                    '??????????????????',
                    '????????????',
                    '??????????????????????',
                    '????????????????',
                    '????????????????????',
                    '????????????????????????????',
                    '??????????????',
                    '??????????????????????',
                    '??????????????????????????',
                    '????????????????????????',
                    '????????????????????',
                    '??????????????????????',
                ]

            let pairField = getters['getCategoryPair']
            if (pairField) {
                const filteredGroups = getters['getAromaGroups'].filter(x => x.aromavis_pair_product_id != null)
                commit('setAromaGroupsFilter', filteredGroups)
                console.log('filteredGroups Pair', filteredGroups);
            } else {
                const filters = {
                    gender: gender => genders.includes(gender),
                    code: code => codes.includes(code.substring(0, 1)),
                    /*filter_values: filter_values => filter_values.find(x => {
                            console.log('universals', universals)
                            console.log('x.name', x.name)
                            return (
                                universals.includes(x.name.toLowerCase())
                            )
                        }
                    ),*/
                    filter_values_daily: day => daily.includes(day.name.toLowerCase()),
                    filter_values_smells: smell => smells.includes(smell.name.toLowerCase()),
                    filter_values_spirits: spirit => spirits.includes(spirit.name.toLowerCase()),
                };
                console.log('filters', filters)
                const filteredGroups = multiLevelFilter(getters['getAromaGroups'], filters)
                commit('setAromaGroupsFilter', filteredGroups)
                console.log('filteredGroups', filteredGroups);
            }
        }
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

        setAllFilters(state, filters) {
            state.categoryMan = filters.categoryMan
            state.categoryWoman = filters.categoryWoman
            state.categoryUnisex = filters.categoryUnisex

            state.categoryC = filters.categoryC
            state.categoryD = filters.categoryD
            state.categoryK = filters.categoryK
            state.categoryM = filters.categoryM

            state.morningCategory = filters.morningCategory
            state.afternoonCategory = filters.afternoonCategory
            state.eveningCategory = filters.eveningCategory
            state.morningAfterEveningCategory = filters.morningAfterEveningCategory
            state.morningAfternoonCategory = filters.morningAfternoonCategory

            state.citrusCategory = filters.citrusCategory
            state.waterCategory = filters.waterCategory
            state.greenCategory = filters.greenCategory
            state.fruitCategory = filters.fruitCategory
            state.flowerCategory = filters.flowerCategory
            state.softFloralCategory = filters.softFloralCategory
            state.floralOrientalCategory = filters.floralOrientalCategory
            state.softOrientalCategory = filters.softOrientalCategory
            state.orientalCategory = filters.orientalCategory
            state.woodyOrientalCategory = filters.woodyOrientalCategory
            state.woodyCategory = filters.woodyCategory
            state.chypreCategory = filters.chypreCategory
            state.wineGlassCategory = filters.wineGlassCategory

            state.officeCategory = filters.officeCategory
            state.braveCategory = filters.braveCategory
            state.confidentCategory = filters.confidentCategory
            state.businessCategory = filters.businessCategory
            state.sexyCategory = filters.sexyCategory
            state.charmCategory = filters.charmCategory
            state.elegantCategory = filters.elegantCategory
            state.provocativeCategory = filters.provocativeCategory
            state.clubCategory = filters.clubCategory
            state.sensualCategory = filters.sensualCategory
            state.romanticCategory = filters.romanticCategory
            state.misteryCategory = filters.misteryCategory
            state.sportCategory = filters.sportCategory
            state.resoluteCategory = filters.resoluteCategory

            state.categoryPair = filters.categoryPair
        }
    },
    getters: {

        getAllFilters(state) {
            const filters = {
                categoryMan: state.categoryMan,
                categoryWoman: state.categoryWoman,
                categoryUnisex: state.categoryUnisex,

                categoryC: state.categoryC,
                categoryD: state.categoryD,
                categoryK: state.categoryK,
                categoryM: state.categoryM,

                morningCategory: state.morningCategory,
                afternoonCategory: state.afternoonCategory,
                eveningCategory: state.eveningCategory,
                morningAfterEveningCategory: state.morningAfterEveningCategory,
                morningAfternoonCategory: state.morningAfternoonCategory,

                citrusCategory: state.citrusCategory,
                waterCategory: state.waterCategory,
                greenCategory: state.greenCategory,
                fruitCategory: state.fruitCategory,
                flowerCategory: state.flowerCategory,
                softFloralCategory: state.softFloralCategory,
                floralOrientalCategory: state.floralOrientalCategory,
                softOrientalCategory: state.softOrientalCategory,
                orientalCategory: state.orientalCategory,
                woodyOrientalCategory: state.woodyOrientalCategory,
                woodyCategory: state.woodyCategory,
                chypreCategory: state.chypreCategory,
                wineGlassCategory: state.wineGlassCategory,

                officeCategory: state.officeCategory,
                braveCategory: state.braveCategory,
                confidentCategory: state.confidentCategory,
                businessCategory: state.businessCategory,
                sexyCategory: state.sexyCategory,
                charmCategory: state.charmCategory,
                elegantCategory: state.elegantCategory,
                provocativeCategory: state.provocativeCategory,
                clubCategory: state.clubCategory,
                sensualCategory: state.sensualCategory,
                romanticCategory: state.romanticCategory,
                misteryCategory: state.misteryCategory,
                sportCategory: state.sportCategory,
                resoluteCategory: state.resoluteCategory,

                categoryPair: state.categoryPair,
            }

            return filters
        },

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
