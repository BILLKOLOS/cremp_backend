const useAppSettings = () => {
  let settings = {};
  settings['BillkolosSoft_app_email'] = 'noreply@BillkolosSoftapp.com';
  settings['BillkolosSoft_base_url'] = 'https://cloud.BillkolosSoftapp.com';
  return settings;
};

module.exports = useAppSettings;
