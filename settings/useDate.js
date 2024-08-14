const useDate = ({ settings }) => {
  const { BillkolosSoft_app_date_format } = settings;

  const dateFormat = BillkolosSoft_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
