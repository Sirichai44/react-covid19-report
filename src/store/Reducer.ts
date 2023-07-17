import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  months: [
    { value: "1", monthName: "January" },
    { value: "2", monthName: "February" },
    { value: "3", monthName: "March" },
    { value: "4", monthName: "April" },
    { value: "5", monthName: "May" },
    { value: "6", monthName: "June" },
    { value: "7", monthName: "July" },
    { value: "8", monthName: "August" },
    { value: "9", monthName: "September" },
    { value: "10", monthName: "October" },
    { value: "11", monthName: "November" },
    { value: "12", monthName: "December" },
  ],
};

const dataSlice = createSlice({
  name: "dataCovid",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload.map((item: any) => {
        const formattedDate = item.publishdate.split("-").reverse().join("-");
        let dateObj = new Date(formattedDate);
        let month = dateObj.getMonth() + 1;

        return { ...item, month, setDate: dateObj.toString() };
      });

      state.data.sort((a: any, b: any) => {
        const dateA: any = new Date(a.setDate).getTime();
        const dateB: any = new Date(b.setDate).getTime();
        return dateA - dateB;
      });
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
