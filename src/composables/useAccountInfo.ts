import { computed, ref } from 'vue'

export const useAccountInfo = (): any => {
  const data: any = ref(null)

  const fetchAccountInfo = async (): Promise<void> => {
    console.log('нечего тут фетчить пока')
  }

  // крч тут будет условно один объект в фетче, все компутеды от него поттянут value

  const basicInfo = computed(() => {
    return [
      {
        name: 'Дата рождения',
        value: 'Нет'
      },
      {
        name: 'Пол',
        value: 'Нет'
      },
      {
        name: 'Гражданство',
        value: 'Нет'
      },
      {
        name: 'Семейное положение',
        value: 'Нет'
      },
      {
        name: 'Дети',
        value: 'Нет'
      },
      {
        name: 'Иждевенцы',
        value: 'Нет'
      }
    ]
  })

  const conditions = computed(() => {
    return [
      {
        name: 'Макс. сумма сделки',
        value: 'Нет'
      },
      {
        name: 'Кредитование',
        value: 'Нет'
      },
      {
        name: 'Цель покупки',
        value: 'Нет'
      }
    ]
  })
  const income = computed(() => {
    return [
      {
        name: 'Постоянная работа',
        value: 'Нет'
      },
      {
        name: 'Заработная плата',
        value: 'Нет'
      },
      {
        name: 'Дополнительный доход',
        value: 'Нет'
      },
      {
        name: 'Общий доход',
        value: 'Нет'
      }
    ]
  })
  const spending = computed(() => {
    return [
      {
        name: 'Кредитные платежи',
        value: 'Нет'
      },
      {
        name: 'Бюджетные платежи',
        value: 'Нет'
      },
      {
        name: 'Прочие расходы',
        value: 'Нет'
      },
      {
        name: 'Общие расходы',
        value: 'Нет'
      }
    ]
  })

  return {
    fetchAccountInfo,
    basicInfo,
    income,
    spending,
    conditions
  }
}
