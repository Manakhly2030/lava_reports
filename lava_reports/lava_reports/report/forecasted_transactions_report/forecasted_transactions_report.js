// Copyright (c) 2024, lavaloon and contributors
// For license information, please see license.txt

frappe.query_reports["Forecasted Transactions Report"] = {
	"filters": [
                  {
                   "fieldname": "filter_company",
                   "fieldtype": "Link",
                   "label": "Company",
                   "mandatory": 1,
                   "options": "Company",
                   "wildcard_filter": 0
                  },
                  {
                   "fieldname": "filter_accounts",
                   "fieldtype": "MultiSelectList",
                   "label": "Accounts",
                   "wildcard_filter": 0,
                   get_data: function(txt) {
                      return frappe.db.get_link_options("Account", txt);
                   }
                  },
                  {
                   "fieldname": "filter_from_date",
                   "fieldtype": "Date",
                   "label": "From Date",
                   "mandatory": 1,
                   "wildcard_filter": 0
                  },
                  {
                   "fieldname": "filter_to_date",
                   "fieldtype": "Date",
                   "label": "To Date",
                   "mandatory": 1,
                   "wildcard_filter": 0
                  },
                  {
                   "default": "Yes",
                   "fieldname": "filter_include_submitted",
                   "fieldtype": "Select",
                   "options": "Yes\nNo",
                   "label": "Include Submitted Transactions",
                   "mandatory": 1,
                   "wildcard_filter": 0
                  }
	]
};
